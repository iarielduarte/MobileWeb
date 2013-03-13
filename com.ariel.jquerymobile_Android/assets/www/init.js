//Ariel Duarte ©2013 
//Date : 10/03/2013
// Configuracion JavaScrip del framework 
//mobileinit : es un evento de JQM cuando ya esta disponible el Fw para ser utilizado
$(document).bind("mobileinit", function(){
	//Codigo de inicio para jQuery Mobile $.mobile representa al Fw de jQm
	$.mobile.ajaxEnabled = false; //Para que ninguna transaccion se haga con ajax
	$.mobile.defaultPageTransition = "slideup"; //Tipo de transaccion de las paginas
	$.mobile.defaultDialogTransition = "flip"; //Tipo de transaccion de los dialogos
	$.mobile.loadingMessage = "Please wait.." //Mensaje cuando se espera que se cargue las pantallas
	$.mobile.pageLoadErrorMessage = "Sorry, don't load this page"; //Personalizar el mensaje de error
	
	
	//Eventos de gestos que podemos personalizar para nuestro Fw
	//tap: la accion de tap es tocar con el dedo una zona en la pantalla
	$("zona").bind("tap", function(){
		//--Hacemos algo
	});
	
	//swipeleft: cuando pasamos de pagina de izquierda a derecha
	$("zona").bind("swipeleft", function(){
		//--Hacemos algo
	});
	//swiperigth: cuando pasamos de pagina de derecha a izquierda
	$("zona").bind("swiperigth", function(){
		//--Hacemos algo
	});
	
	//Eventos de Mouse virtuales que son mas efectivos que los que usa JS
	//vclick: emula un click o un touch dependiendo de la compatibilidad del equipo
	//Investigar mas eventos de mouse para jqm
	$("zona").bind("vclick", function(){
		//--Hacemos algo
	});
	
	//Eventos de Orientación para saber cuando el se cambia la posicion del equipo
	$("document").bind("orientationchange", function(){
		//--Hacemos algo
	});
	
	//Eventos de Scroll
	$("document").bind("scrollstart", function(){
		//--Hacemos algo
	});
	
	$("document").bind("scrollstop", function(){
		//--Hacemos algo
	});
	
	//Eventos de Paginas
	//pageinit: cuando la pagina se cargo seria como el load
	$("page1").bind("pageinit", function(){
		//--Hacemos algo
	});
	
	//Eventos de pagina externas cuando la cargamos via ajax
	
	$("document").bind("pageload", function(){
		//--Hacemos algo
	});
	
	//pagefailed : cuando cualquier pagina falle
	$("document").bind("pagefailed", function(){
		alert("Fallo la carga de la pagina");
	});
	
	//pagebeforechange : para realizar una accion antes de cambiar la pagina osea cuando va a pasar de una pagina a otra
	$("page1").bind("pagebeforechange", function(){
		//--Hacemos algo
	});
	
	//pagechange : para realizar una accion cuando cambio de pagina
	$("page1").bind("pagechange", function(){
		//--Hacemos algo
	});
	
	//pagebeforeshow : para realizar una accion antes de que se muestre la pagina
	$("page1").bind("pagebeforeshow", function(){
		//--Hacemos algo
	});
	
	//pageshow : para realizar una accion cuando la pagina ya esta en pantalla
	$("page1").bind("pageshow", function(){
		//--Hacemos algo
	});
	
	//pagehide : indica que la pagina ya se oculto
	$("page1").bind("pagehide", function(){
		//--Hacemos algo
	});
	
	//pagebeforehide : podemos hacer algo que la pantalla se vaya a otra
	$("page1").bind("pagebeforehide", function(){
		//--Hacemos algo
	});
	
	//Eventos de Layout
	//updatelayout : se puede utilizar para verificar si se ha actualizado el diseño de la pagina
	$("document").bind("updatelayout", function(){
		alert("Change designe page, Ariel");
	});
	
	//animationComplete : se puede utilizar para verificar cuando una animacion de Css finaliza
	$("document").bind("animationComplete", function(){
		alert("Change designe page, Ariel");
	});
}); 