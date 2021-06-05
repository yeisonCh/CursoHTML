// JavaScript Document

function saludo(){
	
alert("estamos generando un alert desde un documento externo");

}

function ejecuta(){
 //getElementsByTagName nos devuelve un array por eso usamos [0] para desencadenar la función en el primer p
	document.getElementsByTagName("p")[0].onclick=saludo;
	
}


//estamos ejecutando un comando para cuando se cargue la ventana se ejecute el codigo
window.onload=ejecuta;

