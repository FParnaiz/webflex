/*--------------------------------------------------------------
Este JS crea un evento que espera que se carge la pagina.
Una vez cargada inicia una función que crea 4 variables,
una apra cada cuadrado y les asigna un color a usando
el return de la funcion color()
-------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    var item1 = document.getElementById("fiesto-cont");
    var item2 = document.getElementById("pro-cont");
    var item3 = document.getElementById("ideal-cont");
    var item4 = document.getElementById("prin-cont");
    item1.style.backgroundColor = color();
    item2.style.backgroundColor = color();
    item3.style.backgroundColor = color();
    item4.style.backgroundColor = color(); 
});