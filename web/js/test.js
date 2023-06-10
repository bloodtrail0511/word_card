let ans = [];
let ans_order = [];
let total = ans.length;
let point = 0;
let num_of_q = 10;
let user_guess = [];
let option = [];

var choose_1 = document.querySelector('.choose_1');
var choose_2 = document.querySelector('.choose_2');
var choose_3 = document.querySelector('.choose_3');
var choose_4 = document.querySelector('.choose_4');
function can_choose(){
    choose_1.addEventListener('click', show_ans_1);
    choose_2.addEventListener('click', show_ans_2);
    choose_3.addEventListener('click', show_ans_3);
    choose_4.addEventListener('click', show_ans_4);
}
function cannot_choose(){
    choose_1.removeEventListener('click', show_ans_1);
    choose_2.removeEventListener('click', show_ans_2);
    choose_3.removeEventListener('click', show_ans_3);
    choose_4.removeEventListener('click', show_ans_4);
}
function show_ans_1() {show_ans(1);}
function show_ans_2() {show_ans(2);}
function show_ans_3() {show_ans(3);}
function show_ans_4() {show_ans(4);}

function show_ans(guess){
    let q_num = parseInt(document.querySelector('.q_num').innerHTML.split('/')[0])-1;
    var correct1 = document.querySelector('.option'+ans_order[q_num]);
    var correct2 = document.querySelector('.plate'+ans_order[q_num]);
    if(guess != ans_order[q_num]){
        var wrong1 = document.querySelector('.option'+guess);
        var wrong2 = document.querySelector('.plate'+guess);
        wrong1.classList.add('color_change');
        wrong2.classList.add('movein');
        wrong2.classList.add('red');
    }
    correct1.classList.add('color_change');
    correct2.classList.add('movein');
    correct2.classList.add('green');
    user_guess[q_num] = guess;
    cannot_choose();
}
function reset_col(){
    for(let i = 1; i < 5; i++){
        let option = document.querySelector('.option'+i);
        let plate = document.querySelector('.plate'+i);
        option.classList.remove('color_change');
        plate.classList.remove('movein');
        plate.classList.remove('red');
        plate.classList.remove('green');
    }
}

async function test(){
    var test_pg = document.querySelector('.test_pg');
    test_pg.classList.add('zoom_in');
    await init_test();
    show_q(1);
    reset_col();
    can_choose();
}

function cancel_test(){
    var test_pg = document.querySelector('.test_pg');
    test_pg.classList.remove('zoom_in');
}

async function init_test(){
    let title = document.querySelector('#deck_title').innerHTML;
    let q_data = await eel.test_gen(title)();
    point = 0;
    ans = q_data[0];
    option = q_data[1];
    ans_order = q_data[2];
    total = ans.length;
    user_guess = Array.from({ length: ans.length }, () => 0);
}
function show_q(num){
    let q_num = document.querySelector('.q_num');
    q_num.innerHTML = num+'/'+total;
    let question = document.querySelector('.question');
    question.innerHTML = document.querySelector('#key_'+ans[num-1]).innerHTML;
    let option1 = document.querySelector('.option1');
    let option2 = document.querySelector('.option2');
    let option3 = document.querySelector('.option3');
    let option4 = document.querySelector('.option4');
    if(document.querySelector('#sec_2_'+option[num-1][0]+' .value') != null){
        option1.innerHTML = 'A) '+document.querySelector('#sec_2_'+option[num-1][0]+' .value').innerHTML;
    }else{option1.innerHTML = '';}
    if(document.querySelector('#sec_2_'+option[num-1][1]+' .value') != null){
        option2.innerHTML = 'B) '+document.querySelector('#sec_2_'+option[num-1][1]+' .value').innerHTML;
    }else{option2.innerHTML = '';}
    if(document.querySelector('#sec_2_'+option[num-1][2]+' .value') != null){
        option3.innerHTML = 'C) '+document.querySelector('#sec_2_'+option[num-1][2]+' .value').innerHTML;
    }else{option3.innerHTML = '';}
    if(document.querySelector('#sec_2_'+option[num-1][3]+' .value') != null){
        option4.innerHTML = 'D) '+document.querySelector('#sec_2_'+option[num-1][3]+' .value').innerHTML;
    }else{option4.innerHTML = '';}
}


let q_pre = document.querySelector('.pre_q').addEventListener('click', pre_q);
let q_next = document.querySelector('.next_q').addEventListener('click', next_q);
function next_q(){
    let next_q = document.querySelector('.next_q');
    let old_q_num = document.querySelector('.q_num').innerHTML.split('/');
    let now = parseInt(old_q_num[0]);
    if(now < total){
        //下一題
        let new_q_num = document.querySelector('.q_num');
        new_q_num.innerHTML = (now+1)+'/'+total;
        show_q(now+1);
        reset_col();
        if(user_guess[now] == 0){
            can_choose();
        }else if(user_guess[now] != 0){
            show_ans(user_guess[now]);
            cannot_choose();
        }
        if(now == total-1){
            next_q.classList.add("fa-check");
            next_q.classList.remove("fa-forward");
            next_q.setAttribute('onclick', 'show_up()');
        }
    }else if(now == total){
        // 送出
        cannot_choose();
        show_result();
    }



}
function pre_q(){
    let next_q = document.querySelector('.next_q');
    let old_q_num = document.querySelector('.q_num').innerHTML.split('/');
    let now = parseInt(old_q_num[0]);
    if(now != 1){
        show_q(now-1);
        let new_q_num = document.querySelector('.q_num');
        new_q_num.innerHTML = (now-1)+'/'+total;
        if(now == total){
            // 把按鈕變回來
            next_q.classList.add("fa-forward");
            next_q.classList.remove("fa-check");
            next_q.removeAttribute('onclick');
        }
        reset_col();
        if(user_guess[now-2] == 0){
            // 沒選過
            can_choose();
        }else{
            // 選過了，show_ans
            show_ans(user_guess[now-2]);
            cannot_choose();
        }
    }
}

function show_result(){
    point = 0;
    for(let i = 0; i < total; i++){
        if(ans_order[i] == user_guess[i]){
            point += 1;
        }
    }
    let percentage = ((point/total)*100).toFixed(1);
    pie(percentage);
}

function pie(num){
    let number = document.querySelector("#number");
    let counter = 0;
    setInterval(() => {
        if(counter >= num){
            clearInterval();
        }else{
            counter += 1;
            number.innerHTML = counter+'%';
        }
    }, (1000/num));
    let styleElement = document.createElement('style');
    let keyframesRule = `
      @keyframes pie_chart {
        100% {
          stroke-dashoffset: `+(4.72*(100-num))+`;
        }
      }
    `;
    styleElement.appendChild(document.createTextNode(keyframesRule));
    document.head.appendChild(styleElement);
    let circle = document.querySelector('circle');
    circle.classList.add('fillup');
}
function show_up(){
    let result_pg = document.querySelector('.result_pg');
    result_pg.classList.add('back_flipped');
    let block = document.querySelector('.block');
    block.classList.remove('hide');
}
function finish(){
    let result_pg = document.querySelector('.result_pg');
    let block = document.querySelector('.block');
    let circle = document.querySelector('circle');
    let next_q = document.querySelector('.next_q');
    result_pg.classList.remove('back_flipped');
    block.classList.add('hide');
    circle.classList.remove('fillup');
    next_q.classList.add("fa-forward");
    next_q.classList.remove("fa-check");
    next_q.removeAttribute('onclick');
    cancel_test();
}