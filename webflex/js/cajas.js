/*--------------------------------------------------------------
Este JS crea un evento que espera que se carge la pagina.
Una vez cargada inicia una función que crea 3 variables,
una para cada elemento animado y el botón y les asigna un color a usando
el return de la funcion color()
-------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    var caja1 = document.getElementById("animation");
    var caja2 = document.getElementById("animation2");
    var caja3 = document.getElementById("animation3");
    caja1.style.background = color();
    caja2.style.background = color();
    caja3.style.background = color();
    document.body.style.backgroundColor = color();
    var boton = document.getElementById("boton");
    boton.style.color = color();
    boton.style.backgroundColor = color();

});