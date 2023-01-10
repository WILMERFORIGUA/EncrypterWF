function encriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted; 
    var replacementResult = encryptedResult.replaceAll("a","ai").replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat");
    document.getElementById("respuesta").innerHTML = replacementResult;
}
function desencriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted;
    var replacementResult = encryptedResult.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById("respuesta").innerHTML = replacementResult;
}
function copyText() {
    var copyField = document.getElementById("respuesta");  
    copyField.select();
    document.execCommand("copy")
}