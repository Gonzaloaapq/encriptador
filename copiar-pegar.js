document.querySelector("#btn-copy").onclick = function() {
    let textoCopiado = document.querySelector(".text-input-salida").value;
    if (textoCopiado) {
        navigator.clipboard.writeText(textoCopiado).then(() => {
            alert("Texto copiado al portapapeles!");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    } else {
        alert("No hay texto para copiar.");
    }
};
