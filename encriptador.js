              /*Thanks God for this project. It was done for you for your love for your mercy! */

function encriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted; 
    var replacementResult = encryptedResult.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat").replaceAll("a","ai");
    document.getElementById("respuesta").innerHTML = replacementResult;
    if (replacementResult==""){
        alert("ATENCIÓN: Escriba un texto porfavor!");
    }
}
function desencriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted;
    var replacementResult = encryptedResult.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u").replaceAll("ai","a");
    document.getElementById("respuesta").innerHTML = replacementResult;
    if (replacementResult==""){
        alert("ATENCIÓN: Escriba un texto porfavor!");
    }
}

function copiar(){
    var contenido = document.querySelector("#respuesta");
    contenido.select();
    document.execCommand("copy");

}

/* OPCION B DE LOGICA

a - ai
e - enter
i - imes
o - ober
u - ufat

function encriptar(){
    var texto = document.querySelector("#mensaje").value;
    var textoCifrado = texto.replace(/e/gi, "enter").replace
    (/i/gi, "imes").replace(
    /a/gi, "ai").replace
    (/o/gi, "ober").replace
    (/u/gi, "ufat");
    document.querySelector(".respuesta").value = textoCifrado;
    document.querySelector("#mensaje").value;
}

function desencriptar(){
    var texto = document.querySelector("#mensaje").value;
    var textoCifrado = texto.replace(/enter/gi, "e").replace
    (/imes/gi, "i").replace
    (/ai/gi, "a").replace
    (/ober/gi, "o").replace
    (/ufat/gi, "u");
    document.querySelector(".respuesta").value = textoCifrado;
    document.querySelector("#mensaje").value;
    }

*/