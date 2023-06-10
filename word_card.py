import eel
import Model
from googletrans import Translator

eel.init("web")


read = Model.Read()
edit = Model.Edit()
test = Model.Test()


def all_table():
    return read.all_table()
def table(table_name):
    return read.table(table_name)
def new_table(table_name):
    return edit.new_table(table_name)
def del_table(table_name):
    return edit.del_table(table_name)
def edit_title(old_title, new_title):
    return edit.edit_title(old_title, new_title)
def insert(table_name, key, pron_key, part_of_speech, value, pron_value):
    return edit.insert(table_name, key, pron_key, part_of_speech, value, pron_value)
def update(table_name, old_key, new_key, pron_key, part_of_speech, value, pron_value):
    return edit.update(table_name, old_key, new_key, pron_key, part_of_speech, value, pron_value)
def del_word(table_name, key):
    return edit.del_word(table_name, key)
def change_fav(table_name, key):
    return edit.change_fav(table_name, key)
def test_gen(table_name):
    return test.multiple_choice(table_name)
def translate(word, dest):
    trans = Translator()
    pos = {'verb':'(v.)', 'noun':'(n.)', 'adjective':'(adj.)', 'adverb':'(adv.)', 'pronoun':'(pron.)', 'preposition':'(prep.)', 'conjunction':'(conj.)', 'exclamation':'(excl.)', 'atricle':'(art.)'}
    result = []
    try:
        data = trans.translate(word, dest = dest)
        # 詞彙
        try:
            result.append(data.origin)
        except:
            result.append('')

        # 發音
        try:
            result.append('[' + data.extra_data['origin_pronunciation'] + ']')
        except:
            result.append('')
            
        # 詞性
        try:
            result.append(pos[data.extra_data['parsed'][3][1][0][0][0]])
        except:
            result.append('')
            
        # 目標語言
        try:
            result.append(data.text)
        except:
            result.append('')
            
        # 目標語言發音
        try:
            result.append('[' + data.pronunciation + ']')
        except:
            result.append('')
    except:
        result = ['', '', '', '', '']
 
    return result


eel.expose(all_table)
eel.expose(table)
eel.expose(new_table)
eel.expose(del_table)
eel.expose(edit_title)
eel.expose(insert)
eel.expose(update)
eel.expose(del_word)
eel.expose(change_fav)
eel.expose(test_gen)
eel.expose(translate)


eel.start('index.html', size=(906, 700), position=(250, 250))