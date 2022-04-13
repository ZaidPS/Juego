let palabra = ""; 
let encontrado = [];
let buscar = ""; 
let fallo = []; 
let ayuda =""; 
let expresion = { letras: /^[a-zA-Z0-9]$/}
let puntuacion = { gano:0, perdio:0};
const fallasPermitidas = 3;

function restarGame(){
   RemoveField(); 
   palabra = ""; 
   encontrado = [];
   buscar = ""; 
   fallo = []; 
   ayuda ="";  
   playGame(); 
} 
//simular obtencion de datos de una rest api
function GetData(){
  let getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
  return dictionary[getRandomInt(0,dictionary.length)]; 
}
 
function selectWord(){   
    let seleccion = GetData(); 
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
 
  palabra.forEach((value, i) =>{ 
    if (value === letra) { 
      ShowLetter(value,i);
      ++encontrados; 
    } 
  }); 
 
  //fallo al buscar la palabra
  if (encontrados === 0) { 
    ShowErrorLetter(letra);  
  } 
  return encontrado; 
} 

function ShowLetter(value,index){
  encontrado[index] = value; 
  document.getElementById(index).value = value;
}

function ShowErrorLetter(letra){
  let isvalid = fallo.includes(letra)
  console.log(isvalid);

  if (isvalid === false){
    fallo.push(letra); 
    console.log(fallo);
  }else{ 
    alert(`letra "${letra}" repetida`);
  }
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

function RemoveField(){
  for(let i = 0;i < palabra.length; i++){
    let campo = document.getElementById(i);
    campo.remove();
  }
}

function comparadorPalabras(){
  let diff = palabra.filter(e => !encontrado.includes(e));
  
  document.getElementById("msj").innerHTML = "En juego";
  document.getElementById("restarGame").style.display ="none";

  if (fallo.length >= fallasPermitidas){
    puntuacion.perdio++;
    document.getElementById("msj").innerHTML = "Game over";
    document.getElementById("restarGame").style.display ="block";
    document.body.removeEventListener("keyup", KeyUpHandler);
    palabra.forEach((value, i) =>{ 
      buscarLetra(value);
    });
    alert("Perdiste");
  }else if(diff.length === 0){
    puntuacion.gano++;
    document.getElementById("msj").innerHTML = "¡Felicidades Ganaste! :3";
    document.getElementById("restarGame").style.display ="block";
    document.body.removeEventListener("keyup", KeyUpHandler);
    alert("ganaste");
  }
  actualizarPuntuacion();
}

function actualizarPuntuacion(){
  document.getElementById("gano").value=puntuacion.gano;
  document.getElementById("perdio").value=puntuacion.perdio;
}

function KeyUpHandler(e){
  buscarLetra(e.key);
  comparadorPalabras(); 
}

function validarCampo(){
  document.body.addEventListener("keyup", KeyUpHandler);
}
 
function playGame(){ 
    selectWord();
    creadorElementos(palabra);
    comparadorPalabras();
    validarCampo();
} 
 
document.addEventListener("DOMContentLoaded", playGame, false)
