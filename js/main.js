window.addEventListener("load", async () => {

    let ruta = "";

    // Detectar si estamos dentro de pages
    if (window.location.pathname.includes("/pages/")) {
        ruta = "../../";
    }

    async function cargar(id, archivo) {

        try {

            const respuesta = await fetch(ruta + archivo);

            if (!respuesta.ok) {
                throw new Error("No encontrado: " + ruta + archivo);
            }

            const html = await respuesta.text();

            document.getElementById(id).innerHTML = html;

        } catch (error) {

            console.error(error);

        }

    }

    if (document.getElementById("header")) {
        await cargar("header", "components/header.html");
    }

    if (document.getElementById("navbar")) {
        await cargar("navbar", "components/navbar.html");
    }

    if (document.getElementById("footer")) {
        await cargar("footer", "components/footer.html");
    }

});
