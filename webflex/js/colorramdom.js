

/*-------------------------------------------------------
La función color() devuelve un codigo de color ramdom.
Los colore spuden ser expresados con un codigo hexagesimal
de 5 cifras más un # al principio EJ:#123AB.
Para generar este codigo creamos un variable con todos los
posibles valores individuales que puede tener (0-9 y A-F).
Luego por cada una de las 5 posiciones posibles escogemos un
valor al azar y lo concatenamos a la variable color que ya
tiene el #.  
 */
function color() {
    var letras = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }