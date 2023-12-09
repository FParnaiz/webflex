/*--------------------------------------------------------------
Esta función cambia la visibilidad del botón y del video.
Hace el boton invisble cuando se le hace click y lo vuelve visible
cuando el video termina y lo contrario para el video.
-------------------------------------------------------------------*/
function reproducir() {
    var video = document.getElementById("video");
    var boton = document.getElementById("boton");
    boton.style.visibility = "hidden"
    video.style.visibility = "visible"
    video.play();
    video.addEventListener('ended', function() {
        video.style.visibility = "hidden"
        boton.style.visibility = "visible"
      });
  }
