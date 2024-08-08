function encriptar() {
    var texto = document.querySelector("#input-texto").value;
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }
    var textoCifrado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector("#msg").value = textoCifrado;
    document.querySelector("#input-texto").value = "";
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar() {
    var texto = document.querySelector("#input-texto").value;
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, ingrese solo letras minúsculas, sin acentos ni caracteres especiales.");
        return;
    }
    var textoCifrado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("#msg").value = textoCifrado;
    document.querySelector("#input-texto").value = "";
}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

