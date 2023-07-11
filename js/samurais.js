//variables globales
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador=3;
let vidasEnemigo=3;

function iniciarJuego(){
	//Esconde secciones
	let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
	//Modifica los estilos y oculta la sección con "none"
	sectionSeleccionarAtaque.style.display = 'none';
	
	let sectionBotonReiniciar = document.getElementById("reiniciar");
	sectionBotonReiniciar.style.display = 'none';
	
	let sectionMensajeBatalla = document.getElementById("mensajes");
	sectionMensajeBatalla.style.display = 'none';
	
	
	
	//Recupera dato del html
	let botonMascotaJugador = document.getElementById('select-samurai');
	botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);
	let botonFuego =document.getElementById('boton-Arriba');
	botonFuego.addEventListener('click',ataqueFuego);
	let botonAgua =document.getElementById('boton-Medio');
	botonAgua.addEventListener('click',ataqueAgua);
	let botonTierra =document.getElementById('boton-Abajo');
	botonTierra.addEventListener('click',ataqueTierra);
	let botonReiniciar= document.getElementById('boton-Reiniciar');
	botonReiniciar.addEventListener('click',reiniciarJuego);
}

function seleccionarMascotaJugador(){
	let sectionSeleccionarMascota = document.getElementById("seleccionar-samurai");
	sectionSeleccionarMascota.style.display = 'none';
	
	
	let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
	//muestra la sección oculta con "block/flex" depende del tipo de display que se requiera
	sectionSeleccionarAtaque.style.display = 'flex';
	
	
	
	let sectionMensajeBatalla = document.getElementById("mensajes");
	sectionMensajeBatalla.style.display = 'block';
	
	let inputHipodoge = document.getElementById('ichigo');
    let inputCapipepo = document.getElementById('chems');
    let inputRatigueya = document.getElementById('samurai');
    let spanMascotaJugador = document.getElementById('samurai-jugador');
	let imgSamuraiAliado=  document.getElementById('info-samurai-Jugador');
	
	//Valida si el input radio con ese ID fue seleccionado con checked
    if (inputHipodoge.checked) {
		//Permite traer elementos HTML para modificar los atributos del elemento
		spanMascotaJugador.innerHTML = 'ichigo';
		//Crea la conexión con el DOM con el ID mencionado
		let imagenAliado= document.getElementById('img-jug');
		//Crea atributo src
		imagenAliado.src ='./assets/samurai-ichigo.png';
	} else if (inputCapipepo.checked) {
		spanMascotaJugador.innerHTML = 'chems';
		let imagenAliado= document.getElementById('img-jug');
		imagenAliado.src ='./assets/chems-samurai.png';
	} else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'samurai';
		let imagenAliado= document.getElementById('img-jug');
		imagenAliado.src ='./assets/samurai.png';
    }else{
		alert('Selecciona una mascota');
	}
	//Se pone aca para que apenas se seleccione se desconocido la mascota
	seleccionarMascotaEnemigo();
}


function seleccionarMascotaEnemigo(){
	let mascotaAleatorio= aleatorio(1,3);
	let spanMascotaEnemigo = document.getElementById('samurai-enemigo');
	let imgSamuraiEnemigo=  document.getElementById('img-Samurai-Enemigo');
	
	if(mascotaAleatorio==1){
		console.log();
		spanMascotaEnemigo.innerHTML = 'ichigo';
		let imagenEnemigo= document.getElementById('img-jug-enemigo');
		imagenEnemigo.src ='./assets/samurai-ichigo.png';
		
	}else if(mascotaAleatorio==2){
		spanMascotaEnemigo.innerHTML = 'chems';
		let imagenEnemigo= document.getElementById('img-jug-enemigo');
		imagenEnemigo.src ='./assets/chems-samurai.png';
		
	}else{
		spanMascotaEnemigo.innerHTML = 'samurai';
		let imagenEnemigo= document.getElementById('img-jug-enemigo');
		imagenEnemigo.src ='./assets/samurai.png';
		
	}
	

}

//Sección ataques
function ataqueFuego(){	
	ataqueJugador ="Fuego";
	ataqueEnemigoMascota();
}
function ataqueAgua(){	
	ataqueJugador ="Agua";
	ataqueEnemigoMascota();
}	
function ataqueTierra(){	
	ataqueJugador ="Tierra";
	ataqueEnemigoMascota();	
}
	
	
function ataqueEnemigoMascota(){
	
	let ataqueEnemigoAleatorio= aleatorio(1,3);
	if(ataqueEnemigoAleatorio==1){
		ataqueEnemigo= 'Fuego';
	}else if(ataqueEnemigoAleatorio==2){
		ataqueEnemigo= 'Agua';
	}else{
		ataqueEnemigo= 'Tierra';
	}
	combate();
}	
	
function crearMensaje(resultado){
	let seccionMensajes = document.getElementById('mensajes');
	let seccionMensaje = document.getElementById('resultado');
	let seccionAtaqueJugador = document.getElementById('ataque-Jugador');
	let seccionAtaqueEnemigo = document.getElementById('ataque-Enemigo');
	let area = document.getElementById('registro');
	
	//Crea registro en un textarea
	area.value=area.value+resultado+"\n";
	area.value=area.value+ataqueJugador+'\n';
	area.value=area.value+ataqueEnemigo+'\n';
	
	let notificacion= document.createElement('p');
	let nuevoAtaqueJ= document.createElement('p');
	let nuevoAtaqueE= document.createElement('p');
	 
	seccionMensaje.innerHTML=resultado;
	nuevoAtaqueJ.innerHTML=ataqueJugador;
	nuevoAtaqueE.innerHTML=ataqueEnemigo;

	seccionMensajes.appendChild(notificacion);

}	
	
function mensajeFinal(resultado){
	let seccionMensajes = document.getElementById('mensajes');
	//Crea un elemento tipo parrafo en HTML
	let parrafo= document.createElement('p');
	
	parrafo.innerHTML= resultado;
	//Permite la insersión del elemento en la sección
	seccionMensajes.appendChild(parrafo);
	
	let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
	sectionSeleccionarAtaque.style.display = 'none';
	
	let sectionBotonReiniciar = document.getElementById("reiniciar");
	sectionBotonReiniciar.style.display = 'block';
	
}	
	
function combate(){
	let spanVidasJugador= document.getElementById('vidaJugador');
	let spanVidasEnemigo= document.getElementById('vidaEnemigo');
	
	if (ataqueEnemigo ==ataqueJugador ) {
		crearMensaje("EMPATE");
	} else if (ataqueJugador== 'Fuego' && ataqueEnemigo == 'Tierra') {
		crearMensaje( "GANASTE");
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego' ) {
		crearMensaje("GANASTE");
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
		crearMensaje("GANASTE");
		vidasEnemigo--;
		spanVidasEnemigo.innerHTML = vidasEnemigo;
	} else {
		crearMensaje("PERDISTE");
		vidasJugador--;
		spanVidasJugador.innerHTML = vidasJugador;
	}
	//crearMensaje();
	revisarVidas();
}

function revisarVidas(){
	if(vidasEnemigo==0){
		mensajeFinal("GANASTE LA PARTIDA");
	}else if(vidasJugador==0){
		mensajeFinal("PERDISTE LA PARTIDA");
	}
}

function reiniciarJuego(){
	//Se refiere location a pagina la que se encuentra -->La función reload recarga la pagina
	location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//Permite cargar los eventos y variables apenas cargue todo el HTML
window.addEventListener('load',iniciarJuego);



