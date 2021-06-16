// JavaScript Document

var miVideo, reproducir, barra, progreso, maximo;
maximo=420;

function comenzar(){
	
	mivideo=document.getElementById("miVideo");
	reproducir=document.getElementById("btnReproducir");
	barra=document.getElementById("barra");
	progreso=document.getElementById("progreso");
	
	reproducir.addEventListener("click",clicando,false);
	
	barra.addEventListener("click",adelantando,false);	
	
}

function clicando(){
	
	if((mivideo.paused==false) && (mivideo.ended==false)){
		
		mivideo.pause();
		reproducir.innerHTML="Play"; <!--sirve para cambiar el texto de algo desde javaScrip-->
		}
		else{ 
		mivideo.play();
		reproducir.innerHTML="Pause"; <!--sirve para cambiar el texto de algo desde javaScrip-->
		
		<!--utilizamos la función sertInterval para que llame constantemente una función-->
		<!-- esta función se debe almacenar en una variable y necesita dos parametros la función que necesitamos llamar-->
		<!-- y el tiempo o frecuencia que queremos llamar la función esto en mili segundos -->
		bucle=setInterval(estado,500);
		}
	
	
	}

function estado(){
	
	if (mivideo.ended==false){
		
		var total=parseInt(mivideo.currentTime*maximo/mivideo.duration); 
		<!--se realiza una regla de tres para calcular el tiempo transcurrido para llenar la barra de progreso-->
		progreso.style.width=total+"px";
		
		}
	}
	

function adelantando(posicion){
	if ((mivideo.paused==false) && (mivideo.ended)==false){
	
	var ratonX=posicion.pageX-barra.offsetLeft;
	<!-- pageX nos devuelve la posición del ratón o puntero en el eje de las X-->
	<!-- offsetLeft nos devuelve la distancia que hay desde el borde izquierdo de la pagina has ta la barra  -->
	
	var nuevoTiempo = ratonX*mivideo.duration/maximo;
	
	mivideo.currentTime=nuevoTiempo;
	progreso.style.width=ratonX+"px";
	}
	}
	
window.addEventListener("load",comenzar,false);