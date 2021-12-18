//Gerador de cores aleatórias
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

//Texto dinâmico com nome da cor aleatório
let rgbAleatorio = document.getElementById('rgb-color');

window.onload = function (min, max){
    return Math.floor(Math.random() * (max - min));
}
rgbAleatorio.innerHTML = (ball[onload(0, ball.length)].style.backgroundColor)


//Texto interativo do Jogo
pMensagem = document.getElementById('answer');
pMensagem.innerText = "Escolha uma cor"


//Verificação do resutado
for(let i = 0; i < ball.length; i+=1){
    ball[i].addEventListener('click', verificaResposta)
}

function verificaResposta(event){
    if(event.target.style.backgroundColor == rgbAleatorio.innerText){
        console.log('Acertou');
        pMensagem.innerText = 'Acertou!';
    }else{
        pMensagem.innerText = 'Errou! Tente novamente!';
    }

}


//Botão Reset
botaoReset = document.getElementById('reset-game');
botaoReset.addEventListener('click', reset);

function reset(){
    console.log('botão reset')
    document.location.reload(true);
}