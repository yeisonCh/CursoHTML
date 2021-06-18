// JavaScript Document

var miAudio, reproducir, barra, progreso, maximo;
maximo=420;

function comenzar(){
	
	miAudio=document.getElementById("miAudio");
	reproducir=document.getElementById("play");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");
	
	reproducir.addEventListener("click",clicando,false);
	
	barra.addEventListener("click",adelantando,false);	
	
}

function clicando(){
	
	if((miAudio.paused==false) && (miAudio.ended==false)){
		
		miAudio.pause();
		reproducir.innerHTML="Play"; <!--sirve para cambiar el texto de algo desde javaScrip-->
		}
		else{ 
		miAudio.play();
		reproducir.innerHTML="Pause"; <!--sirve para cambiar el texto de algo desde javaScrip-->
		
		<!--utilizamos la función sertInterval para que llame constantemente una función-->
		<!-- esta función se debe almacenar en una variable y necesita dos parametros la función que necesitamos llamar-->
		<!-- y el tiempo o frecuencia que queremos llamar la función esto en mili segundos -->
		bucle=setInterval(estado,500);
		}
	
	
	}

function estado(){
	
	if (miAudio.ended==false){
		
		var total=parseInt(miAudio.currentTime*maximo/miAudio.duration); 
		<!--se realiza una regla de tres para calcular el tiempo transcurrido para llenar la barra de progreso-->
		progreso.style.width=total+"px";
		
		}
	}
	

function adelantando(posicion){
	if ((miAudio.paused==false) && (miAudio.ended)==false){
	
	var ratonX=posicion.pageX-barra.offsetLeft;
	<!-- pageX nos devuelve la posición del ratón o puntero en el eje de las X-->
	<!-- offsetLeft nos devuelve la distancia que hay desde el borde izquierdo de la pagina has ta la barra  -->
	
	var nuevoTiempo = ratonX*miAudio.duration/maximo;
	
	miAudio.currentTime=nuevoTiempo;
	progreso.style.width=ratonX+"px";
	}
	}
	
window.addEventListener("load",comenzar,false);