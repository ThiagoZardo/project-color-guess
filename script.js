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


//Verificação do resutado e soma dos pontos
for(let i = 0; i < ball.length; i+=1){
    ball[i].addEventListener('click', verificaResposta)
}

let pontos = document.getElementById('score');
contagemPontos = 0;


function verificaResposta(event){
    if(event.target.style.backgroundColor == rgbAleatorio.innerText){
        console.log('Acertou');
        pMensagem.innerText = 'Acertou!';
        contagemPontos += 3;
    }else{
        pMensagem.innerText = 'Errou! Tente novamente!';
        contagemPontos += 0; 
    }
    pontos.innerText = contagemPontos;
    salvar();
}

//Botão Reset
botaoReset = document.getElementById('reset-game');
botaoReset.addEventListener('click', reset);

function reset(){ 
    //Resetando cores
    for(let i = 0; i < ball.length; i+=1){
        ball[i].style.backgroundColor = cores();
    }
   
    //Resetando texto dinâmico 
    window.onload = function (min, max){
        return Math.floor(Math.random() * (max - min));
    }
    rgbAleatorio.innerHTML = (ball[onload(0, ball.length)].style.backgroundColor)
    
    //Exibindo pontos e texto interativo
    pontos.innerText =+ localStorage.getItem('pontos')
    pMensagem.innerText = "Escolha uma cor"
}


//Salva resultados
function salvar(){
    localStorage.setItem('pontos', pontos.innerText);
}

window.onload = function(){  
    pontos.innerText =+ localStorage.getItem('pontos')
}

