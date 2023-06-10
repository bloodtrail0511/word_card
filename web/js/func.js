let lang = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'catalan', 'cebuano', 'chichewa', 'chinese (simplified)', 'chinese (traditional)', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 
'odia', 'pashto', 'persian', 'polish', 'portuguese', 'punjabi', 'romanian', 'russian', 'samoan', 'scots gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uyghur', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];
let code = {'afrikaans': 'af', 'albanian': 'sq', 'amharic': 'am', 'arabic': 'ar', 'armenian': 'hy', 'azerbaijani': 'az', 'basque': 'eu', 'belarusian': 'be', 'bengali': 'bn', 'bosnian': 'bs', 'bulgarian': 'bg', 'catalan': 'ca', 'cebuano': 'ceb', 'chichewa': 'ny', 'chinese (simplified)': 
'zh-cn', 'chinese (traditional)': 'zh-tw', 'corsican': 'co', 'croatian': 'hr', 'czech': 'cs', 'danish': 'da', 'dutch': 'nl', 'english': 'en', 'esperanto': 'eo', 'estonian': 'et', 'filipino': 'tl', 'finnish': 'fi', 'french': 'fr', 'frisian': 'fy', 'galician': 'gl', 'georgian': 'ka', 'german': 'de', 'greek': 'el', 'gujarati': 'gu', 'haitian creole': 'ht', 'hausa': 'ha', 'hawaiian': 'haw', 'hebrew': 'he', 'hindi': 'hi', 'hmong': 'hmn', 'hungarian': 'hu', 'icelandic': 'is', 'igbo': 'ig', 'indonesian': 'id', 'irish': 'ga', 'italian': 'it', 'japanese': 'ja', 'javanese': 'jw', 'kannada': 'kn', 'kazakh': 'kk', 'khmer': 'km', 'korean': 'ko', 'kurdish (kurmanji)': 'ku', 'kyrgyz': 'ky', 'lao': 'lo', 'latin': 'la', 'latvian': 'lv', 'lithuanian': 'lt', 'luxembourgish': 'lb', 'macedonian': 'mk', 'malagasy': 'mg', 'malay': 'ms', 'malayalam': 'ml', 'maltese': 'mt', 'maori': 'mi', 'marathi': 'mr', 'mongolian': 'mn', 'myanmar (burmese)': 'my', 'nepali': 'ne', 'norwegian': 'no', 'odia': 'or', 'pashto': 'ps', 'persian': 'fa', 'polish': 'pl', 'portuguese': 'pt', 'punjabi': 'pa', 'romanian': 'ro', 'russian': 
'ru', 'samoan': 'sm', 'scots gaelic': 'gd', 'serbian': 'sr', 'sesotho': 'st', 'shona': 'sn', 'sindhi': 'sd', 'sinhala': 'si', 'slovak': 'sk', 'slovenian': 'sl', 'somali': 'so', 'spanish': 'es', 'sundanese': 'su', 'swahili': 'sw', 'swedish': 'sv', 'tajik': 'tg', 'tamil': 'ta', 'telugu': 'te', 'thai': 'th', 'turkish': 'tr', 'ukrainian': 'uk', 'urdu': 'ur', 'uyghur': 'ug', 'uzbek': 'uz', 'vietnamese': 'vi', 'welsh': 'cy', 'xhosa': 'xh', 'yiddish': 'yi', 'yoruba': 'yo', 'zulu': 'zu'};
let word_num = [0];
async function all_table(){
    var x = await eel.all_table()();
    return x;
}

async function table(name){
    var clear = document.querySelector('#card_group');
    clear.innerHTML = '';
    var data = await eel.table(name)();
    var card_group = document.querySelector("#card_group");
    var content_list = ['key', 'pron_key', 'pos', 'value', 'pron_value', 'fav']
    for(let i = 0; i < data.length; i++){
        var word_content = document.createElement('div');
        word_content.setAttribute('class', 'word_content');
        word_content.setAttribute('id', 'word_content_'+String(i))
        card_group.appendChild(word_content);
        var table_name = document.createElement('div');
        table_name.innerHTML = data[i][6];
        table_name.setAttribute('id', 'table_name_' + String(i));
        table_name.setAttribute('style', 'display:none;');
        card_group.appendChild(table_name);
        for(let j = 0; j < 4; j++){
            var word_content = document.querySelector("#word_content_"+String(i));
            var sec = document.createElement('div');
            sec.setAttribute('class', 'sec sec_'+String(j));
            sec.setAttribute('id', 'sec_'+String(j)+'_'+String(i))
            word_content.appendChild(sec);
        }
        for(let j = 0; j < 6; j++){
            if(j < 2){
                // sec_0
                var sec = document.querySelector('#sec_0_'+String(i));
                var content = document.createElement('div');
                content.setAttribute('class', content_list[j]);
                content.setAttribute('id', content_list[j]+'_'+String(i));
                content.innerHTML = data[i][j];
                sec.appendChild(content);
            }else if(j < 5){
                // sec_2
                var sec = document.querySelector('#sec_2_'+String(i));
                var content = document.createElement('div');
                content.setAttribute('class', content_list[j]);
                content.innerHTML = data[i][j];
                sec.appendChild(content);
            }else if(j == 5){
                // sec_3
                var sec = document.querySelector('#sec_3_'+String(i));
                var content = document.createElement('div');
                content.setAttribute('class', content_list[j]);
                content.setAttribute('id', content_list[j] + '_' + String(i));
                content.innerHTML = data[i][j];
                var star = document.createElement('i');
                if(data[i][j] == 0){
                    star.setAttribute('class', 'fa-solid fa-star');
                }else if(data[i][j] == 1){
                    star.setAttribute('class', 'fa-solid fa-star yellow');
                }
                star.setAttribute('id', 'star_'+String(i));
                star.setAttribute('onclick', 'star('+String(i)+')');
                sec.appendChild(content);
                sec.appendChild(star);
            }
        }
    }
    slide_init();
    zoom_in(name);
}



async function deck_group(number = 0){
    var outsideDiv = document.querySelector(".deck_group");
    outsideDiv.innerHTML = '';
    var a = await all_table();
    for (let i = 0; i < a.length; i++){
        let mode = ['card_deck_toggle', "table("+'"'+a[i][0]+'"'+")", 'hide'];
        if(number == 1){
            mode = ['', '', ''];
            let edit_btn = document.querySelector('#edit');
            edit_btn.classList.add('fa-square-check');
            edit_btn.classList.remove('fa-pen-to-square');
        }
        var new_div_ = document.createElement("div");
        new_div_.setAttribute("class", "card_deck "+mode[0]);
        new_div_.setAttribute("id", a[i][0]);
        new_div_.setAttribute("onclick", mode[1]);
        outsideDiv.appendChild(new_div_);
        var insideDiv = document.querySelector("#"+a[i][0]);
        var title = document.createElement("div");
        var num = document.createElement("div");
        title.setAttribute("id", "title");
        title.setAttribute("class", "words");
        title.innerHTML = a[i][0];
        num.setAttribute("id", "num");
        num.setAttribute("class", "words");
        num.innerHTML = a[i][1]+"個詞語";
        let remove_btn = document.createElement('i');
        remove_btn.setAttribute('class', 'main_del '+mode[2]+' fa-solid fa-circle-xmark');
        remove_btn.setAttribute('onclick', 'remove_table("'+a[i][0]+'")');
        insideDiv.appendChild(remove_btn);
        insideDiv.appendChild(title);
        insideDiv.appendChild(num);
    }
}


function zoom_in(name){
    var x = document.querySelector("#card_deck_inside");
    x.classList.add("zoom_in");
    var black = document.querySelector("#black");
    black.classList.add("move_forward");
    var dark = document.querySelector(".main_pg");
    dark.classList.add("darkness");
    var title = document.getElementById("deck_title");
    title.textContent = name;
    var edit = document.querySelector("#edit");
    var favorite = document.querySelector("#favorite");
    var new_ = document.querySelector("#new");
    edit.classList.add("hide");
    favorite.classList.add("hide");
    new_.classList.add("hide");
}
function zoom_out(){
    var clear = document.querySelector('#card_group');
    clear.innerHTML = '';
    var x = document.querySelector("#card_deck_inside");
    x.classList.remove("zoom_in");
    var black = document.querySelector("#black");
    black.classList.remove("move_forward");
    var dark = document.querySelector(".main_pg");
    dark.classList.remove("darkness");
    var edit = document.querySelector("#edit");
    var favorite = document.querySelector("#favorite");
    var new_ = document.querySelector("#new");
    edit.classList.remove("hide");
    favorite.classList.remove("hide");
    new_.classList.remove("hide");
    let previous_flip = document.querySelector('.previous_flip');
    let next_flip = document.querySelector('.next_flip');
    previous_flip.setAttribute("onclick", "previous(0)");
    next_flip.setAttribute("onclick", "next(0)");
    let view = document.querySelector(".view");
    view.innerHTML = '';
    deck_group();
}

async function star(i){
    var star = document.querySelector('#star_' + String(i));
    var key = document.querySelector('#key_' + String(i)).innerHTML;
    var table_name = document.querySelector('#table_name_' + String(i)).innerHTML;
    var favorite = await eel.change_fav(table_name, key)();
    if(favorite == 1){
        star.classList.add('yellow');
    }else if(favorite == 0){
        star.classList.remove('yellow');
    }
}
function flip(num){
    let cover = document.querySelector('.content'+num+' .cover');
    let back = document.querySelector('.content'+num+' .back');
    cover.classList.toggle('cover_flipped');
    back.classList.toggle('back_flipped');
}
function slide_init(){
    let view = document.querySelector(".view");
    view.innerHTML = '';
    let previous_flip = document.querySelector('.previous_flip');
    let next_flip = document.querySelector('.next_flip');
    previous_flip.setAttribute("onclick", "previous(0)");
    next_flip.setAttribute("onclick", "next(0)");
    make_flip(0, 'center');
    make_flip(1, 'right');
    make_flip(2, 'righter');
}
function make_flip(num, place){
    let word = document.querySelector('#word_content_'+num);
    let view = document.querySelector(".view");
    if(word){
        let key = document.querySelector("#key_"+num).innerHTML;
        let pron_key = document.querySelector("#pron_key_"+num).innerHTML;
        let pos = document.querySelector("#sec_2_"+num+" .pos").innerHTML;
        let value = document.querySelector("#sec_2_"+num+" .value").innerHTML;
        let pron_value = document.querySelector("#sec_2_"+num+" .pron_value").innerHTML;
        let content0 = document.createElement('div');
        let cover = document.createElement('div');
        let back = document.createElement('div');
        let flip_key = document.createElement('div');
        let flip_pron_key = document.createElement('div');
        let flip_value = document.createElement('div');
        let flip_pron_value = document.createElement('div');
        content0.setAttribute('class', 'content content'+num+' '+place);
        content0.setAttribute('onclick', 'flip('+num+')');
        view.appendChild(content0);
        let content_0 = document.querySelector('.content'+num);
        cover.setAttribute('class', 'cover');
        back.setAttribute('class', 'back');
        content_0.appendChild(cover);
        content_0.appendChild(back);
        let cover_0 = document.querySelector(".content"+num+" .cover");
        flip_key.setAttribute("class", "flip_key");
        flip_key.innerHTML = key;
        flip_pron_key.setAttribute("class", "flip_pron_key");
        flip_pron_key.innerHTML = pron_key;
        cover_0.appendChild(flip_key);
        cover_0.appendChild(flip_pron_key);
        let back_0 = document.querySelector(".content"+num+" .back");
        flip_value.setAttribute("class", "flip_value");
        flip_value.innerHTML = pos + value;
        flip_pron_value.setAttribute("class", "flip_pron_value");
        flip_pron_value.innerHTML = pron_value;
        back_0.appendChild(flip_value);
        back_0.appendChild(flip_pron_value);
    }
}
function previous(num){
    let condition = document.querySelector('.content'+(num-1));
    if(condition){
        let lefter = document.querySelector('.content'+(num-2));
        let left = document.querySelector('.content'+(num-1));
        let center = document.querySelector('.content'+num);
        let right = document.querySelector('.content'+(num+1));
        let righter = document.querySelector('.content'+(num+2));
        let previous_flip = document.querySelector('.previous_flip');
        let next_flip = document.querySelector('.next_flip');
        if(righter){righter.remove();}
        if(right){
            right.classList.remove('right');
            right.classList.add('righter');
        }
        center.classList.remove('center');
        center.classList.add('right');
        if(left){
            left.classList.remove('left');
            left.classList.add('center');
            previous_flip.setAttribute('onclick', 'previous('+(num-1)+')');
            next_flip.setAttribute('onclick', 'next('+(num-1)+')');
        }
        if(lefter){
            lefter.classList.remove('lefter');
            lefter.classList.add('left');
        }
        let new_flip_card = document.querySelector('#word_content_'+(num-3));
        if(new_flip_card){
            make_flip(num-3, 'lefter');
        }
    }
}
function next(num){
    let condition = document.querySelector('.content'+(num+1));
    if(condition){
        let lefter = document.querySelector('.content'+(num-2));
        let left = document.querySelector('.content'+(num-1));
        let center = document.querySelector('.content'+num);
        let right = document.querySelector('.content'+(num+1));
        let righter = document.querySelector('.content'+(num+2));
        let previous_flip = document.querySelector('.previous_flip');
        let next_flip = document.querySelector('.next_flip');
        if(lefter){lefter.remove();}
        if(left){
            left.classList.remove('left');
            left.classList.add('lefter');
        }
        center.classList.remove('center');
        center.classList.add('left');
        if(right){
            right.classList.remove('right');
            right.classList.add('center');
            previous_flip.setAttribute('onclick', 'previous('+(num+1)+')');
            next_flip.setAttribute('onclick', 'next('+(num+1)+')');
        }
        if(righter){
            righter.classList.remove('righter');
            righter.classList.add('right');
        }
        let new_flip_card = document.querySelector('#word_content_'+(num+3));
        if(new_flip_card){
            make_flip(num+3, 'righter');
        }
    }
}

function go_up(){
    var x = document.querySelector("#edit_group");
    x.classList.add("zoom_in");
    var black = document.querySelector("#black");
    black.classList.add("move_more_forward");
    var dark = document.querySelector(".main_pg");
    dark.classList.add("darkness");
    var edit = document.querySelector("#edit");
    var favorite = document.querySelector("#favorite");
    var new_ = document.querySelector("#new");
    edit.classList.add("hide");
    favorite.classList.add("hide");
    new_.classList.add("hide");
}
function go_down(){
    var x = document.querySelector("#edit_group");
    x.classList.remove("zoom_in");
    var black = document.querySelector("#black");
    black.classList.remove("move_more_forward");
    var dark = document.querySelector(".main_pg");
    dark.classList.remove("darkness");
    var edit = document.querySelector("#edit");
    var favorite = document.querySelector("#favorite");
    var new_ = document.querySelector("#new");
    edit.classList.remove("hide");
    favorite.classList.remove("hide");
    new_.classList.remove("hide");
    let clear_contianer = document.querySelector('.container');
    clear_contianer.innerHTML = '';
    deck_group();
}
function go_down_still_dark(){
    var x = document.querySelector("#edit_group");
    x.classList.remove("zoom_in");
    var black = document.querySelector("#black");
    black.classList.remove("move_more_forward");
    var edit = document.querySelector("#edit");
    var favorite = document.querySelector("#favorite");
    var new_ = document.querySelector("#new");
    edit.classList.remove("hide");
    favorite.classList.remove("hide");
    new_.classList.remove("hide");
    let clear_contianer = document.querySelector('.container');
    clear_contianer.innerHTML = '';
    deck_group();
}

function edit_title(){
    let del_btn = document.querySelectorAll('.main_del');
    let edit_btn = document.querySelector('#edit');
    let card_deck = document.querySelectorAll('.card_deck');
    edit_btn.classList.toggle('fa-pen-to-square');
    edit_btn.classList.toggle('fa-square-check');
    card_deck.forEach(function(element){
        element.classList.toggle('card_deck_toggle');
        let onclick = element.getAttribute('onclick');
        if(onclick == null || onclick == ''){
            element.setAttribute('onclick', "table('" + element.id + "')");
        }
        else{
            element.removeAttribute('onclick');
        }
    });

    del_btn.forEach(function(element){
        element.classList.toggle('hide');
    });
}
async function remove_table(table_name){
    alert('成功刪除 '+table_name);
    await eel.del_table(table_name)();
    deck_group(1);
}
function new_div(){
    word_num = [0];
    let container = document.querySelector('.container');
    container.innerHTML = `
                <div class="inputbox title_edit">
                    <input type="text" class="inputbox" required="required">
                    <span>標題</span>
                </div>`;
    lang_menu();
    container.innerHTML += `
                <div class="word word_0">
                    <div class="left_edit">
                        <div class="inputbox key_edit">
                            <input type="text" required="required" onfocus="startTimer(0)" onblur="stopTimer(0)">
                            <span>詞彙</span>
                        </div>
                        <div class="inputbox pron_key_edit">
                            <input type="text" required="required">
                            <span>發音</span>
                        </div>
                    </div>
                    <div class="inputbox pos_edit">
                        <input type="text" required="required">
                        <span>詞性</span>
                    </div>                    
                    <div class="right_edit">
                        <div class="inputbox value_edit">
                            <input type="text" required="required">
                            <span>目標語言</span>
                        </div>
                        <div class="inputbox pron_value_edit">
                            <input type="text" required="required">
                            <span>目標語言發音</span>
                        </div>
                    </div>
                    <i class="del fa-solid fa-circle-xmark" onclick="remove(0)"></i>
                </div>
                <div class="word new" onclick="new_word()">
                    <i class="fa-solid fa-plus"></i>
                </div>
    `;
    go_up();
    let edit_btn = document.querySelector('#return_btn');
    edit_btn.setAttribute('onclick', 'go_down()');
    let check_btn = document.querySelector('.check_btn');
    check_btn.setAttribute('onclick', "submit('new_table')");
}
function edit_deck(){
    word_num = [0];
    go_up();
    let edit_btn = document.querySelector('#return_btn');
    edit_btn.setAttribute('onclick', 'go_down_still_dark()');
    let check_btn = document.querySelector('.check_btn');
    let ori_title = document.querySelector('#deck_title').innerHTML;
    check_btn.setAttribute('onclick', "submit('edit_word')");
    let container = document.querySelector('.container');
    container.innerHTML = `
    <div class="inputbox title_edit">
        <input type="text" class="inputbox" required="required" value="`+ori_title+`">
        <span>標題</span>
    </div>`;
    lang_menu();
    let how_many_words = document.querySelectorAll('.word_content').length;
    for(let i = 0; i < how_many_words; i++){
        container.innerHTML += `
        <div class="word word_`+i+`">
            <div class="left_edit">
                <div class="inputbox key_edit">
                    <input type="text" required="required" onfocus="startTimer(`+i+`)" onblur="stopTimer(`+i+`)">
                    <span>詞彙</span>
                </div>
                <div class="inputbox pron_key_edit">
                    <input type="text" required="required">
                    <span>發音</span>
                </div>
            </div>
            <div class="inputbox pos_edit">
                <input type="text" required="required">
                <span>詞性</span>
            </div>                    
            <div class="right_edit">
                <div class="inputbox value_edit">
                    <input type="text" required="required">
                    <span>目標語言</span>
                </div>
                <div class="inputbox pron_value_edit">
                    <input type="text" required="required">
                    <span>目標語言發音</span>
                </div>
            </div>
            <i class="del fa-solid fa-circle-xmark" onclick="remove(`+i+`)"></i>
        </div>`;
        let key = document.querySelector('.word_'+i+' .left_edit .key_edit input');
        let pron_key = document.querySelector('.word_'+i+' .left_edit .pron_key_edit input');
        let pos = document.querySelector('.word_'+i+' .pos_edit input');
        let value = document.querySelector('.word_'+i+' .right_edit .value_edit input');
        let pron_value = document.querySelector('.word_'+i+' .right_edit .pron_value_edit input');
        let ori_key = document.querySelector('#key_'+i).innerHTML;
        let ori_pron_key = document.querySelector('#pron_key_'+i).innerHTML;
        let ori_pos = document.querySelector('#word_content_'+i+' .sec_2 .pos').innerHTML;
        let ori_value = document.querySelector('#word_content_'+i+' .sec_2 .value').innerHTML;
        let ori_pron_value = document.querySelector('#word_content_'+i+' .sec_2 .pron_value').innerHTML;
        key.setAttribute('value', ori_key);
        pron_key.setAttribute('value', ori_pron_key);
        pos.setAttribute('value', ori_pos);
        value.setAttribute('value', ori_value);
        pron_value.setAttribute('value', ori_pron_value);
        if(i != 0){word_num.push(i);}
        
    }
    if(ori_title == 'Favorite'){
        check_btn.setAttribute('onclick', "submit('edit_fav')");
        let read_only = document.querySelector('.title_edit input');
        read_only.classList.add('read_only');
    }
    else{
        container.innerHTML += `
            <div class="word new" onclick="new_word()">
                <i class="fa-solid fa-plus"></i>
            </div>
        `;
    }
}

function lang_menu(){
    let container = document.querySelector('.container');
    let select = document.createElement('select');
    select.id = 'lang';
    select.name = 'lang';
    select.setAttribute('onchange', 'lang_code()');
    container.appendChild(select);
    for(let i = 0; i < lang.length; i++){
        let option = document.createElement('option');
        let select = document.querySelector('#lang');
        option.value = code[lang[i]];
        option.innerHTML = lang[i];
        if(option.innerHTML == 'chinese (traditional)'){
            // option.selected = true;
            option.setAttribute('selected', true);
        }
        select.appendChild(option);
    }
}
function lang_code(){
    let selectElement = document.querySelector('#lang');
}
function new_word(){
    if(word_num.length == 0){
        index = 0;
    }
    else{
        index = word_num[word_num.length-1]+1;
    }
    word_num.push(index);
    // alert(word);
    let container = document.querySelector('.container');
    let word = document.createElement('div');
    word.setAttribute('class', 'word word_'+index);
    word.innerHTML = `
    <div class="left_edit">
        <div class="inputbox key_edit">
            <input type="text" required="required" onfocus="startTimer(`+index+`)" onblur="stopTimer(`+index+`)">
            <span>詞彙</span>
        </div>
        <div class="inputbox pron_key_edit">
            <input type="text" required="required">
            <span>發音</span>
        </div>
    </div>
    <div class="inputbox pos_edit">
        <input type="text" required="required">
        <span>詞性</span>
    </div>                    
    <div class="right_edit">
        <div class="inputbox value_edit">
            <input type="text" required="required">
            <span>目標語言</span>
        </div>
        <div class="inputbox pron_value_edit">
            <input type="text" required="required">
            <span>目標語言發音</span>
        </div>
    </div>
    <i class="del fa-solid fa-circle-xmark" onclick="remove(`+index+`)"></i>`;
    container.appendChild(word);    
}

function remove(num){
    index = word_num.indexOf(num);
    if(index >= 0){
        word_num.splice(index, 1);
        let remove_target = document.querySelector('.word_'+num);
        remove_target.remove();
    }
}
async function submit(mode){
    switch(mode){
        case 'new_table':
            let title = document.querySelector('.title_edit input').value;
            if(title == ''){
                alert('標題不可為空');
            }
            else if(!isNaN(title.charAt(0))){
                alert('開頭不可為數字');
            }
            else{
                msg = await eel.new_table(title)();
                if(msg){
                    alert(msg);
                }
                else{
                    for(let i = 0; i < word_num.length; i++){
                        let key = document.querySelector('.word_'+word_num[i]+' .left_edit .key_edit input').value;
                        if(key != ''){
                            let pron_key = document.querySelector('.word_'+word_num[i]+' .left_edit .pron_key_edit input').value;
                            let pos = document.querySelector('.word_'+word_num[i]+' .pos_edit input').value;
                            let value = document.querySelector('.word_'+word_num[i]+' .right_edit .value_edit input').value;
                            let pron_value = document.querySelector('.word_'+word_num[i]+' .right_edit .pron_value_edit input').value;
                            eel.insert(title, key, pron_key, pos, value, pron_value)();
                        }
                    }
                    alert('新增成功');
                    go_down();
                }
            }
            break;
        case 'edit_word':
            let how_many_words = document.querySelectorAll('.word_content').length;
            let how_many_words_edited = word_num[word_num.length-1]+1;
            let long = 0;
            if(how_many_words >= how_many_words_edited){
                long = how_many_words;
            }
            else{
                long = how_many_words_edited;
            }
            let old_title = document.querySelector('#deck_title').innerHTML;
            let new_title = document.querySelector('.title_edit input').value;
            if(new_title != ''){
                let key_null = 0;
                for(let j = 0; j < word_num[word_num.length-1]; j++){
                    if(document.querySelector('.word_'+word_num[j]+' .left_edit .key_edit input').value == ''){
                        key_null = 1;
                    }
                }
                if(key_null == 0){
                    if(old_title != new_title){
                        await eel.edit_title(old_title, new_title)();
                    }
                    for(let i = 0; i < long; i++){
                        let ori_key = '';
                        let ori_pron_key = '';
                        let ori_pos = '';
                        let ori_value = '';
                        let ori_pron_value = '';
                        let key = '';
                        let pron_key = '';
                        let pos = '';
                        let value = '';
                        let pron_value = '';
                        if(document.querySelector('#key_'+i) != null){
                            ori_key = document.querySelector('#key_'+i).innerHTML;
                        }
                        if(document.querySelector('#pron_key_'+i) != null){
                            ori_pron_key = document.querySelector('#pron_key_'+i).innerHTML;
                        }
                        if(document.querySelector('#word_content_'+i+' .sec_2 .pos') != null){
                            ori_pos = document.querySelector('#word_content_'+i+' .sec_2 .pos').innerHTML;
                        }
                        if(document.querySelector('#word_content_'+i+' .sec_2 .value') != null){
                            ori_value = document.querySelector('#word_content_'+i+' .sec_2 .value').innerHTML;
                        }
                        if(document.querySelector('#word_content_'+i+' .sec_2 .pron_value') != null){
                            ori_pron_value = document.querySelector('#word_content_'+i+' .sec_2 .pron_value').innerHTML;
                        }
                        if(document.querySelector('.word_'+i+' .left_edit .key_edit input') != null){
                            key = document.querySelector('.word_'+i+' .left_edit .key_edit input').value;
                        }
                        if(document.querySelector('.word_'+i+' .left_edit .pron_key_edit input') != null){
                            pron_key = document.querySelector('.word_'+i+' .left_edit .pron_key_edit input').value;
                        }
                        if(document.querySelector('.word_'+i+' .pos_edit input') != null){
                            pos = document.querySelector('.word_'+i+' .pos_edit input').value;
                        }
                        if(document.querySelector('.word_'+i+' .right_edit .value_edit input') != null){
                            value = document.querySelector('.word_'+i+' .right_edit .value_edit input').value;
                        }
                        if(document.querySelector('.word_'+i+' .right_edit .pron_value_edit input') != null){
                            pron_value = document.querySelector('.word_'+i+' .right_edit .pron_value_edit input').value;
                        }
                        if(ori_key != '' && key != ''){
                            if(ori_key != key || ori_pron_key != pron_key || ori_pos != pos || ori_value != value || ori_pron_value != pron_value){
                                await eel.update(new_title, ori_key, key, pron_key, pos, value, pron_value)();
                            }
                        }
                        else if(ori_key != '' && key == ''){
                            //del
                            await eel.del_word(new_title, ori_key)();
                        }
                        else if(ori_key == '' && key != ''){
                            //insert
                            await eel.insert(new_title, key, pron_key, pos, value, pron_value)();
                        }
                    }
                    alert('修改成功');
                    go_down_still_dark();
                    table(new_title);
                }
                else if(key_null == 1){
                    alert('詞彙不可為空');
                }
            }
            else if(new_title == ''){
                alert('標題不可為空');
            }
            break;
        case 'edit_fav':
            let key_null = 0;
            for(let j = 0; j < word_num[word_num.length-1]; j++){
                if(document.querySelector('.word_'+word_num[j]+' .left_edit .key_edit input').value == ''){
                    key_null = 1;
                }
            }
            if(key_null == 0){
                for(let i = 0; i < document.querySelectorAll('.word_content').length; i++){
                    let ori_table = document.querySelector('#table_name_'+i).innerHTML;
                    let ori_key = document.querySelector('#key_'+i).innerHTML;
                    let ori_pron_key = document.querySelector('#pron_key_'+i).innerHTML;
                    let ori_pos = document.querySelector('#word_content_'+i+' .sec_2 .pos').innerHTML;
                    let ori_value = document.querySelector('#word_content_'+i+' .sec_2 .value').innerHTML;
                    let ori_pron_value = document.querySelector('#word_content_'+i+' .sec_2 .pron_value').innerHTML;
                    let key = '';
                    let pron_key = '';
                    let pos = '';
                    let value = '';
                    let pron_value = '';
                    if(document.querySelector('.word_'+i+' .left_edit .key_edit input') != null){
                        key = document.querySelector('.word_'+i+' .left_edit .key_edit input').value;
                    }
                    if(document.querySelector('.word_'+i+' .left_edit .pron_key_edit input') != null){
                        pron_key = document.querySelector('.word_'+i+' .left_edit .pron_key_edit input').value;
                    }
                    if(document.querySelector('.word_'+i+' .pos_edit input') != null){
                        pos = document.querySelector('.word_'+i+' .pos_edit input').value;
                    }
                    if(document.querySelector('.word_'+i+' .right_edit .value_edit input') != null){
                        value = document.querySelector('.word_'+i+' .right_edit .value_edit input').value;
                    }
                    if(document.querySelector('.word_'+i+' .right_edit .pron_value_edit input') != null){
                        pron_value = document.querySelector('.word_'+i+' .right_edit .pron_value_edit input').value;
                    }
                    if(ori_key != '' && key != ''){
                        if(ori_key != key || ori_pron_key != pron_key || ori_pos != pos || ori_value != value || ori_pron_value != pron_value){
                            await eel.update('Favorite', ori_key, key, pron_key, pos, value, pron_value)();
                            await eel.update(ori_table, ori_key, key, pron_key, pos, value, pron_value)();
                        }
                    }
                    else if(ori_key != '' && key == ''){
                        //del
                        a = await eel.del_word('Favorite', ori_key)();
                        b = await eel.del_word(ori_table, ori_key)();
                    }
                }
                alert('修改成功');
                go_down_still_dark();
                table('Favorite');
            }
            else if(key_null == 1){
                alert('詞彙不可為空');
            }
            break;
    }
}

async function trans(num){
    let selectElement = document.querySelector('#lang');
    let dest = selectElement.options[selectElement.selectedIndex].value;
    let key = document.querySelector('.word_'+num+' .left_edit .key_edit input').value;
    let pron_key = document.querySelector('.word_'+num+' .left_edit .pron_key_edit input');
    let pos = document.querySelector('.word_'+num+' .pos_edit input');
    let value = document.querySelector('.word_'+num+' .right_edit .value_edit input');
    let pron_value = document.querySelector('.word_'+num+' .right_edit .pron_value_edit input');
    let trans_result = await eel.translate(key, dest)();
    pron_key.value = trans_result[1];
    pos.value = trans_result[2];
    value.value = trans_result[3];
    pron_value.value = trans_result[4];
}

// 定義計時器組數
let timers = [];

// 定義要觸發的組數
async function triggerTrans(num) {
  let selectElement = document.querySelector('#lang');
  let dest = selectElement.options[selectElement.selectedIndex].value;
  let key = document.querySelector('.word_' + num + ' .left_edit .key_edit input').value;
  let pron_key = document.querySelector('.word_' + num + ' .left_edit .pron_key_edit input');
  let pos = document.querySelector('.word_' + num + ' .pos_edit input');
  let value = document.querySelector('.word_' + num + ' .right_edit .value_edit input');
  let pron_value = document.querySelector('.word_' + num + ' .right_edit .pron_value_edit input');
  let trans_result = await eel.translate(key, dest)();
  pron_key.value = trans_result[1];
  pos.value = trans_result[2];
  value.value = trans_result[3];
  pron_value.value = trans_result[4];
}

// 啟動計时器
function startTimer(num) {
  timers[num] = setInterval(function() {
    triggerTrans(num);
  }, 500);
}

// 停止計时器
function stopTimer(num) {
  clearInterval(timers[num]);
}
