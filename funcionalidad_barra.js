var mivideo, reproducir, barra, progreso;

function comentar(){
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click",clicando,false);

    progreso.addEventListener("click", adelantado,false);
   
}

function clicando(){
    /* Si el video no se encuentra pausado y ademas el video no se encuentra finalizado, entonces detiene el video(pausa), de lo contrario play */
    if((mivideo.paused==false) && (mivideo.ended==false)) {
        mivideo.pause();
        reproducir.innerHTML="[>"
    }
    else{
        mivideo.play();
        reproducir.innerHTML="||"
    }

}

window.addEventListener("load",comentar,false);