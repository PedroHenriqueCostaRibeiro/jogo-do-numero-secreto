let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let contador = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
     campo.innerHTML = texto;
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function textoInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

textoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute);
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
        let messagem = `Você descobriu o número secreto com ${contador} ${palavraTentativa}!`;
        exibirTextoNaTela('p',messagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto) {
         exibirTextoNaTela('h1', 'O número secreto é menor!');
    }else {
        exibirTextoNaTela('h1', 'O número secreto é maior!');
    }
    contador++;
    limparCampo()
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    contador = 1;
    textoInicial();
    document.getElementById('reinicar').setAttribute('disabled', true);
}

console.log(numeroSecreto);  