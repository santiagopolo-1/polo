/*let edad= 20;
console.log("Tienes " + edad +  " años");
console.log(`Tienes ${edad} años`);
*/



let texto = document.getElementById("parrafoUno");
let cancion = document.getElementById("parrafoDos");

let inicio = true;
let frase = 0;
let tamañoLetra = 0.5;

let letra = [
    "Hoy volví",
    "A dormir en nuestra cama, y todo sigue igual",
    "El aire y nuestros gatos, nada cambiará",
    "Difícil olvidarte estando aquí, ah",
    "Te quiero ver",
    "Aún te amo y creo que hasta más que ayer",
    "La hiedra venenosa no te deja ver",
    "Me siento mutilada y tan pequeña, ah"
]

cancion.addEventListener("click", () => {
    cancion.innerText = letra[frase];
    cancion.style.fontSize = `${tamañoLetra}em`;
    if(frase < letra.length - 1) {
    frase += 1; // frase = frase + 1
    tamañoLetra += 1;
    }
})




/*texto.addEventListener("click", () => {
    if(inicio === true) {
        texto.innerText = "Sí se mueve";
    }
    else if (inicio === false) {
        texto.innerText = "se mueve / no se mueve";
    }
    inicio = !inicio;
})*/



