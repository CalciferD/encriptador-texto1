//pasa el texto a minuscula,elimina los acentos y elimina todos los caracteres que no sean letras
function procesarTexto(texto) {
    texto = texto.toLowerCase();
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    texto = texto.replace(/[^a-z\s]/g, "");
    return texto;
}
//ocultar la imagen y mostrar el boton de copiar cada vez que se encripte o desencripte
function ocultarImagen() {
    let imagenPlaceholder = document.querySelector('.imagen');
    let contCopiar = document.querySelector('.cont-copiar');
    if (imagenPlaceholder) {
        imagenPlaceholder.style.display = 'none';
        contCopiar.style.display = 'flex'; 
    }
}
//mostrar la imagen si el campo de resultado no tiene texto
function mostrarImagenSiVacio() {
    let outputText = document.getElementById("output-text");
    let imagenPlaceholder = document.querySelector('.imagen');
    let contCopiar = document.querySelector('.cont-copiar');

    if (outputText.value === '') {
        imagenPlaceholder.style.display = 'block'; 
        contCopiar.style.display = 'none';
    }
}
//encriptar el texto escrito
function encriptar() {
    let inputText = document.getElementById("input-text");
    let outputText = document.getElementById("output-text");

    let texto = procesarTexto(inputText.value);
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    outputText.value = textoEncriptado;
    inputText.value = '';

    ocultarImagen();
}
//desencriptar el texto ya encrinpatadp
function desencriptar() {
    let inputText = document.getElementById("input-text");
    let outputText = document.getElementById("output-text");

    let texto = procesarTexto(inputText.value);
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    outputText.value = textoDesencriptado;
    inputText.value = '';

    ocultarImagen(); 
}
//copiar el resultado de el texto 
function copiarTexto() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");

    outputText.value = ''; 

    mostrarImagenSiVacio(); 

    alert("Texto copiado al portapapeles!");
}
