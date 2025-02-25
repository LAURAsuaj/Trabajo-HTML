function nuevoTitulo(texto) {
    if (!texto) {
        texto = prompt("Ingrese el título:");
    }

    if (texto && texto.trim() !== "") {
        const titulo = document.createElement("h1");
        titulo.textContent = texto;
        const contenido = document.getElementById("contenido");
        contenido.appendChild(titulo);
    } else {
        alert("Por favor ingrese un texto para el título");
    }
}
document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}

function nuevoEnlace(url, textoEnlace) {
    if (!url) {
        url = prompt("Ingrese la URL:");
    }
    if (!textoEnlace) {
        textoEnlace = prompt("Ingrese el texto del enlace:");
    }

    if (url && url.trim() !== "" && textoEnlace && textoEnlace.trim() !== "") {
        const enlace = document.createElement("a");
        enlace.href = url;
        enlace.textContent = textoEnlace;
        const contenido = document.getElementById("contenido");
        contenido.appendChild(enlace);
        contenido.appendChild(document.createElement("br"));
    } else {
        alert("Por favor ingrese tanto la URL como el texto del enlace");
    }
}

function nuevoParrafo() {
    const texto = document.getElementById("texto").value;
    if (texto && texto.trim() !== "") {
        const parrafo = document.createElement("p");
        parrafo.textContent = texto;
        const contenido = document.getElementById("contenido");
        contenido.appendChild(parrafo);
        document.getElementById("texto").value = "";
    } else {
       alert("Por favor ingrese un texto para el párrafo");
    }
}

function imprimir() {
    var contenidoDiv = document.getElementById("contenido");
    var divContents = contenidoDiv.innerHTML;

    if (divContents.includes("function imprimir()")) {
        contenidoDiv.innerHTML = "";
        divContents = contenidoDiv.innerHTML;
    }

    var ventanaImpresion = window.open('', '_blank', 'height=600, width=800');
    ventanaImpresion.document.write('<html><head><title>Contenido para imprimir</title>');
    ventanaImpresion.document.write('<link rel="stylesheet" href="css/styles.css" type="text/css" />');
    ventanaImpresion.document.write('</head><body>');
    ventanaImpresion.document.write('<h1>Contenido Impreso</h1>');
    ventanaImpresion.document.write(divContents);
    ventanaImpresion.document.write('</body></html>');
    ventanaImpresion.document.close();

   setTimeout(function () {
        ventanaImpresion.print();
    }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    const contenidoDiv = document.getElementById("contenido");
    if (contenidoDiv.innerHTML.includes("function imprimir()")) {
        contenidoDiv.innerHTML = "";
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        const linkText = link.textContent.trim();

        if (linkText === "Título") {
            link.setAttribute("onclick", "nuevoTitulo(); return false;");
        } else if (linkText === "Enlace") {
            link.setAttribute("onclick", "nuevoEnlace(); return false;");
        } else if (linkText === "Imprimir") {
            link.setAttribute("onclick", "imprimir(); return false;");
        }
       });
});