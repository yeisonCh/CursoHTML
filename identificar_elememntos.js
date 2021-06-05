// JavaScript Document

function ejecuta(){

 	//document.querySelector('#Principal p:last-child').onclick=saludo;
	//last-child => nos apunta al ultimo elemento p que tenemos en principal
	
	//var elemento=document.querySelectorAll("#Principal p")[3].onclick=saludo;
		//querySelectorAll => nos devuelve un array 
	
	var elemento=document.querySelectorAll("#Principal p, span");
		//querySelectorAll => nos devuelve un array 
	
	for (var i=0; i<elemento.length; i++) {
		
		elemento[i].onclick=saludo;
	}
}

function saludo(){
	alert("Que hay de nuevo");
}


//estamos ejecutando un comando para cuando se cargue la ventana se ejecute el codigo
window.onload=ejecuta;