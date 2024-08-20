function encryptText() {
    let input = document.getElementById("inputText").value;
    let encrypted = input.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encrypted;
}

function decryptText() {
    let input = document.getElementById("inputText").value;
    let decrypted = input.replace(/enter/g, "e")
                        .replace(/imes/g, "i")
                        .replace(/ai/g, "a")
                        .replace(/ober/g, "o")
                        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decrypted;
}

function copyText() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}
