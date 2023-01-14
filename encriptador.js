function encriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted; 
    var replacementResult = encryptedResult.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat").replaceAll("a","ai");
    document.getElementById("respuesta").innerHTML = replacementResult;
}
function desencriptar() {
    var getEncrypted = document.getElementById("mensaje").value.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
    var encryptedResult = getEncrypted;
    var replacementResult = encryptedResult.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u").replaceAll("ai","a");
    document.getElementById("respuesta").innerHTML = replacementResult;
}
function copiar() {
    var copyField = document.getElementById("respuesta");  
    copyField.select();
    document.execCommand("copiar")
}
