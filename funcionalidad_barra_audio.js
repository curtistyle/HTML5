var miaudio, reproducir, barra, progreso, maximo;

maximo = 255;

function comentar(){
    miaudio=document.getElementById("miaudio");
    reproducir=document.getElementById("play");
    barra=document.getElementById("barra");
    progreso=document.getElementById("progreso");

    reproducir.addEventListener("click",clicando,false);

    barra.addEventListener("click", adelantando,false);
   
}

function clicando(){
    /* Si el video no se encuentra pausado y ademas el video no se encuentra finalizado, entonces detiene el video(pausa), de lo contrario play */
    if((miaudio.paused==false) && (miaudio.ended==false)) {
        miaudio.pause();
        reproducir.innerHTML="[>";
    }
    else{
        miaudio.play();
        reproducir.innerHTML="||";

        bucle=setInterval(estado,1000);
    }

}

function estado(){
    if(miaudio.ended==false){
        var total = parseInt(miaudio.currentTime*maximo/miaudio.duration);

        progreso.style.width = total + "px";
    } 
}

function adelantando(posicion){
    if((miaudio.paused==false) && (miaudio.ended==false)){
        var ratonx= posicion.pageX-barra.offsetLeft;

        var nuevotiempo=ratonx*miaudio.duration/maximo;

        miaudio.currentTime = nuevotiempo;

        progreso.style.width = ratonx+"px";
    }
}

window.addEventListener("load",comentar,false);