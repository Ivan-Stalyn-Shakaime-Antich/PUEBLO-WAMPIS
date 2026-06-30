window.addEventListener("load", async () => {

let ruta = "";

// detectar si estamos dentro de pages

if (
window.location.pathname.includes("/pages/")
) {

ruta = "../../";

}


async function cargar(id, archivo){

const r =
await fetch(ruta + archivo);

const html =
await r.text();

document
.getElementById(id)
.innerHTML = html;

}


// HEADER
if(document.getElementById("header")){

await cargar(
"header",
"components/header.html"
);

}


// NAVBAR
if(document.getElementById("navbar")){

await cargar(
"navbar",
"components/navbar.html"
);

}


// FOOTER
if(document.getElementById("footer")){

await cargar(
"footer",
"components/footer.html"
);

}

});

// SCROLL SUAVE A CONTACTO

document.addEventListener("DOMContentLoaded",()=>{

const contacto=
document.querySelector(
'a[href="#contacto"]'
);

if(contacto){

contacto.addEventListener(
"click",

function(e){

e.preventDefault();

document
.getElementById("contacto")
.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

}

});