import sqlite3
import random

def gen_question(num, questions_quantity = 10):
    choices = []
    choices_order = []
    if num < 10:
        questions_quantity = num
    ans = random.sample(range(num), questions_quantity)
    for a in ans:
        options = [j for j in range(num) if j != a]
        random.shuffle(options)
        if num < 4:
            wrong = random.sample(options, num-1)
        else:
            wrong = random.sample(options, 3)
        mix = [a] + wrong
        random.shuffle(mix)
        choices.append(mix)
        if num < 4:
            for i in range(num):
                if a == choices[-1][i]:
                    choices_order.append(i+1)
        else:
            for i in range(4):
                if a == choices[-1][i]:
                    choices_order.append(i+1)
    return ans, choices, choices_order

class Database:
    def __init__(self):
        self.con = sqlite3.connect("./web/data/word_card.db")

    def query(self, magic_words):
        try:
            result = self.con.execute(magic_words)
            self.con.commit()
            return result
        except sqlite3.Error as e:
            return f"Error: {e}"

class Read(Database):
    def all_table(self):
        name = self.con.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT IN ('Favorite', '');").fetchall()
        result = []
        for i in range(len(name)-1, -1, -1):
            num = self.con.execute("select count(*) from {}".format(name[i][0])).fetchall()[0][0]
            result.append([name[i][0], num])
        return result
    
    def table(self, table_name):
        cursor = list(self.query("SELECT * from {}".format(table_name)))
        for i in range(len(cursor)):cursor[i] = list(cursor[i])
        return cursor

class Edit(Database):
    def new_table(self, table_name):
        return self.query(f''' CREATE TABLE {table_name}(
                            key STRING NOT NULL,
                            pron_key STRING,
                            part_of_speech STRING,
                            value STRING,
                            pron_value STRING,
                            favorite BOOLEAN,
                            table_name STRING
                        );''')

    def del_table(self, table_name):
        self.query(f"DELETE FROM Favorite WHERE table_name = '{table_name}'")
        return self.query(f"DROP TABLE {table_name};")

    def edit_title(self, old_title, new_title):
        return self.query(f"ALTER TABLE '{old_title}' RENAME TO '{new_title}'")

    def insert(self, table_name, key, pron_key, part_of_speech, value, pron_value):
        return self.query(f"INSERT INTO {table_name} VALUES ('{key}', '{pron_key}', '{part_of_speech}', '{value}', '{pron_value}', 0, '{table_name}');")

    def update(self, table_name, old_key, new_key, pron_key, part_of_speech, value, pron_value):
        return self.query(f"""UPDATE {table_name} SET
        key = '{new_key}',
        pron_key = '{pron_key}',
        part_of_speech = '{part_of_speech}',
        value = '{value}',
        pron_value = '{pron_value}'
        WHERE key = '{old_key}';""")

    def del_word(self, table_name, key):
        return self.query(f"DELETE FROM {table_name} WHERE key = '{key}'")

    def change_fav(self, table_name, key):
        boolean = self.con.execute(f"select favorite from {table_name} where key = '{key}'").fetchall()[0][0]
        if boolean == 0:
            self.query(f"UPDATE {table_name} SET favorite = 1 where key = '{key}'")
            self.query(f"INSERT INTO Favorite SELECT * FROM {table_name} where key = '{key}';")
            return 1
        elif boolean == 1:
            self.query(f"UPDATE {table_name} SET favorite = 0 where key = '{key}'")
            self.query(f"DELETE FROM Favorite WHERE key = '{key}';")
            return 0
        else:
            return boolean

class Test(Read):
    def multiple_choice(self, table_name, q_num = 10):
        data = self.table(table_name)
        if len(data) < 10:
            info = gen_question(len(data), len(data))
        elif len(data) >= 10:
            info = gen_question(len(data), q_num)
        return info
