// Documento de JavaScript

// alert("Bienvenidos")

function ejecuta(){
    /* Lo que hace la siguiente linea de codigo, es que nuestro documento detecte
    un elemento por el nombre name de la etiqueta y la posicion. */
    //document.getElementsByTagName("p")[0].onclick=bienvenida;

    /* este lo detecta por 'id' */
    //document.getElementById("importante").onclick=bienvenida;

    // Este detecta todos los parrafos
    /*
    for (var i=0; i<=4;i++){
        document.getElementsByTagName("p")[i].onclick=bienvenida
    }
    */

    for(var i=0;i<4;i++){
    var x = document.getElementsByClassName("importante")[i].onclick=bienvenida;
    }
}

function bienvenida(){
    alert("Bienvenidos")
}

window.onload=ejecuta; //Cuando carga la ventana ejecuta la funcion 'bienvenida'