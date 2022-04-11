let palabra = ""; 
let encontrado = [];
let buscar = ""; 
let fallo = []; 
let ayuda =""; 
let expresion = { letras: /^[a-zA-Z0-9]$/}
 
function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min; 
} 
 
 
function selectWord(){ 
    let dictionary = [ 
        {ayuda:"Comedia",palabra:"gintama"}, 
        {ayuda:"gore",palabra:"elfenlied"}, 
        {ayuda:"piratas",palabra:"onepiece"}, 
        {ayuda:"relleno",palabra:"naruto"}, 
        {ayuda:"el mejor :3",palabra:"monogatari"}]; 
    let seleccion = dictionary[getRandomInt(0,dictionary.length)]; 
    palabra = seleccion.palabra.split(""); 
    ayuda =seleccion.ayuda;
    
    console.log("el contenido de palabra es: "+ palabra)
    console.log("el contenido de palabra es: "+ ayuda)
} 
 
function buscarLetra(letra) { 
  let encontrados = 0; 

  if(!expresion.letras.test(letra)){
    console.log("no es letra ni numero");
    return;
  }
 
  palabra.forEach(function (value, i) { 
    if (value === letra) { 
      encontrado[i] = value; 
      document.getElementById(i).value = value;
      ++encontrados; 
      console.log("el valor de encontrado aqui es" + encontrado)
    } 
  }); 
 
  //fallo al buscar la palabra
  if (encontrados === 0) { 
    fallo.push("x"); 
  } 
  return encontrado; 
} 

function creadorElementos(){
  document.getElementById("mensaje").innerHTML = `Palabra con ${palabra.length} letras`;
  document.getElementById("Ayuda").innerHTML = `Ayuda: ${ayuda}`;
  for(let i = 0;i < palabra.length; i++){
    const formulario = document.getElementById("formulario");
    
    const campoT = document.createElement("input");

    campoT.id = i;
    campoT.type = "text";
    campoT.maxLength= 1;
    campoT.disabled = true;
    campoT.style="width:25px";
    formulario.appendChild(campoT)
  }
}

function comparadorPalabras(){
  let diff = palabra.filter(e => !encontrado.includes(e));
  if(diff.length === 0){
    document.getElementById("msj").innerHTML = "¡Felicidades Ganaste! :3"
  }else{
    document.getElementById("msj").innerHTML = "En juego"
  }
}

function validarCampo(){
  document.body.addEventListener("keyup", (e) => {
    buscarLetra(e.key);
    comparadorPalabras();
  });
}
 
function playGame(){ 
    selectWord();
    creadorElementos(palabra);
    validarCampo(palabra);
} 
  
document.addEventListener("DOMContentLoaded", playGame, false)