let p = document.getElementById('rgb-color');


function cores (){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    let corRgb = 'rgb(' + r + ',' + g + ',' + b + ')'

    return corRgb;
}

let ball = document.querySelectorAll('.ball');

for(let i = 0; i < ball.length; i+=1){
    ball[i].style.backgroundColor = cores();
    console.log(ball[i].style.backgroundColor)
}














/*
window.onload = function coresAleatorias(){
    let ball = document.getElementsByClassName('ball');
    let hexadecimais = '0123456789ABCDEF';
    let cor = '#';

        cor += hexadecimais[Math.floor(Math.random() * 16)];
        ball[0].style.backgroundColor=cor;
        cor += hexadecimais[Math.floor(Math.random() * 16)];
        ball[1].style.backgroundColor=cor;
        cor += hexadecimais[Math.floor(Math.random() * 16)];
        ball[2].style.backgroundColor=cor;
        cor += hexadecimais[Math.floor(Math.random() * 16)];
        ball[3].style.backgroundColor=cor;
        cor += hexadecimais[Math.floor(Math.random() * 16)];
        ball[4].style.backgroundColor=cor;
        cor += hexadecimais[Math.floor(Math.random() * 16)];
        ball[5].style.backgroundColor=cor;


}*/