var mivideo, reproducir, barra, progreso, maximo;

maximo = 255;

function comentar(){
    mivideo=document.getElementById("mivideo");
    reproducir=document.getElementById("reproducir");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click",clicando,false);

    barra.addEventListener("click", adelantando,false);
   
}

function clicando(){
    /* Si el video no se encuentra pausado y ademas el video no se encuentra finalizado, entonces detiene el video(pausa), de lo contrario play */
    if((mivideo.paused==false) && (mivideo.ended==false)) {
        mivideo.pause();
        reproducir.innerHTML="[>";
    }
    else{
        mivideo.play();
        reproducir.innerHTML="||";

        bucle=setInterval(estado,1000);
    }

}

function estado(){
    if(mivideo.ended==false){
        var total = parseInt(mivideo.currentTime*maximo/mivideo.duration);

        progreso.style.width = total + "px";
    } 
}

function adelantando(posicion){
    if((mivideo.paused==false) && (mivideo.ended==false)){
        var ratonx= posicion.pageX-barra.offsetLeft;

        var nuevotiempo=ratonx*mivideo.duration/maximo;

        mivideo.currentTime = nuevotiempo;

        progreso.style.width = ratonx+"px";
    }
}

window.addEventListener("load",comentar,false);