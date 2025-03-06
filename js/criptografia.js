function cripMensagem (){

    var inMensagem = document.getElementById("inMensagem");
    var outMensagem = document.getElementById("outMensagem");

    var mensagem = inMensagem.value;

    var tam = mensagem.length;


    var resposta = "";


    for (i = 0; i < tam; i++){
        if (i % 2 != 0) {
            resposta += mensagem.charAt(i);
        }
    }

    for (i = 0; i < tam; i++){
        if (i % 2 === 0) {
                resposta += mensagem.charAt(i);
            }
    }


    outMensagem.textContent = resposta
}
var btCriptografar = document.getElementById("btCriptografar");
btCriptografar.addEventListener("click", cripMensagem);

function descMensagem (){

    var inMensagem = document.getElementById("inMensagem");
    var outMensagem = document.getElementById("outMensagem");

    var mensagem = inMensagem.value;

    tam = mensagem.length;

    var qtd_pares = Math.floor(mensagem.length/2);

    var pares = "";

    var impares = "";

    var resposta = "";

    for (i = 0; i < qtd_pares; i ++){
        pares += mensagem.charAt(i);
    }

    for (i = qtd_pares; i < mensagem.length; i++) {
        impares += mensagem.charAt(i);
    }

    for (i = 0; i < mensagem.length; i++) {
        resposta += impares.charAt(i) + pares.charAt(i);
    }


    
    outMensagem.textContent = resposta;

}
var btDescriptografar = document.getElementById("btDescriptografar");
btDescriptografar.addEventListener("click", descMensagem);