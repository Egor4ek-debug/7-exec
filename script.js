//1 задание
/*
var ul = document.createElement('ul');
document.body.append(ul);

while(true){
    var data = prompt("Введите текст сюда ");
    if (!data){
        break
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}
*/
var button1 = document.createElement('button');
button1.textContent="Автоматическая смена рисунков";
document.body.append(button1);

var button2 = document.createElement('button');
button2.textContent="Стоп";
document.body.append(button2);

var button3 = document.createElement('button');
button3.textContent="К следующему";
document.body.append(button3);

var button4 = document.createElement('button');
button4.textContent="К предыдущему";
document.body.append(button4);

var button5 = document.createElement('button');
button5.textContent="Ускорение смены рисунков";
document.body.append(button5);

const imgs = document.getElementById('imgs')

const img = document.querySelectorAll ('#imgs img')

let index = 0;

let interval;
let fast_interval;

button1.addEventListener('click', ()=>{
    clearInterval(fast_interval);
    interval= setInterval(run,5000);
})

button2.addEventListener('click', ()=>{
    stop();
})

button3.addEventListener('click',() => {
    index++;
    changeImage();
    resetInterval();
})

button4.addEventListener('click',()=>{
    index--;
    changeImage();
    resetInterval();
})

button5.addEventListener('click', ()=>{
    clearInterval(interval);
    fast_interval = setInterval(run,2000);
})

function changeImage(){

    if(index > img.length -1 ){
        index = 0;
    }
    else if (index < 0 ){
        index = img.length -1
    }

    imgs.style.transform = `translateX(${-index * 500}px)`;
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run,5000);
}

function stop(){
    
    clearInterval(interval);

    clearInterval(fast_interval);
}

function run(){
    index++;
    changeImage();
}