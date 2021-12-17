//Gera cores aleatórias
function cores (){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const corRgb = 'rgb(' + r + ',' + g + ',' + b + ')'

    return corRgb;
}

let ball = document.querySelectorAll('.ball');

for(let i = 0; i < ball.length; i+=1){
    ball[i].style.backgroundColor = cores();
    console.log(ball[i].style.backgroundColor)
}

//-------------------------

/*
let p = document.getElementById('rgb-color');
p.innerText = 'rgb(' + r + ',' + g + ',' + b + ')' 
*/

//Texto dinamico
pMensagem = document.getElementById('answer');
pMensagem.innerText = "Escolha uma cor"


