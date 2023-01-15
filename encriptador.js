function encriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted; 
    var replacementResult = encryptedResult.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    document.getElementById("respuesta").innerHTML = replacementResult;
    if (replacementResult==""){
        alert ("ATENCIÓN!!! Introduce un texto porfavor");
    }
}
function desencriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted;
    var replacementResult = encryptedResult.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById("respuesta").innerHTML = replacementResult;
    if (replacementResult==""){
        alert ("ATENCIÓN!!! Introduce un texto porfavor");
    }
}
function copiar() {
    var copyField = document.getElementById("respuesta");  
    copyField.select();
    document.execCommand("copiar")
}
