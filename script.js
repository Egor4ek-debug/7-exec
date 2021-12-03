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

var img = document.createElement('img');
img.src="images/image1.jpg";
document.body.append(img);

button1.onclick = function(){
    for (var i = 0; i<8;i++){
    img.src="images/image"+[i]+".jpg";
    }
}
