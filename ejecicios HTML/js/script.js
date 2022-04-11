let palabra = ""; 
let encontrado = [];
let encontrado2 = []; 
let buscar = ""; 
let fallo = []; 
let ayuda =""; 
let expresion = { letras: /^[a-zA-Z]$/}
 
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

    for(let a = 0; a < palabra.length; a++){
      console.log("la letra no. "+a+" es: "+ palabra[a])
    }
 
} 
 
function buscarLetra(letra) { 
  let encontrados = 0; 
 
  palabra.forEach(function (value, i) { 
    if (value === letra) { 
      encontrado[i] = value; 
      ++encontrados; 
      console.log("el valor de encontrado aqui es" + encontrado)
    } 
  }); 
 
  if (encontrados === 0) { 
    fallo.push("x"); 
    console.log(fallo); 
    console.log("el valor de encontrado aqui es" + encontrado)
  } 
  return encontrado; 
} 

function creadorElementos(){
  document.getElementById("mensaje").innerHTML = "Palabra con " + palabra.length + " letras"
  for(let i = 0;i < palabra.length; i++){
    console.log("estoy dentro del for para crear el campo de texto")
    const formulario = document.getElementById("formulario")
    const campoT = document.createElement("input")
    campoT.id = i
    campoT.type = "text"
    campoT.maxLength="1"
    if(i==0){
      console.log("estoy dentro del IF")
      campoT.disabled = false
    }else{
      console.log("estoy dentro del ELSE")
      campoT.disabled = true
    }
    formulario.appendChild(campoT)
  }
}

function comparadorPalabras(){
  console.log(palabra)
  console.log(encontrado2)
  if(encontrado2 === palabra){
    console.log("estoy en el if de comparadorPalabra")
    document.getElementById("msj").innerHTML = "¡Felicidades Ganaste! :3"
  }else{
    console.log("estoy en el else de comparadorPalabra")
    document.getElementById("msj").innerHTML = "En juego"
  }
}


let validador = (e) => {

  if(expresion.letras.test(e.target.value)){
    
    let caracter = e.target.value
    console.log("El Caracter es una letra: " + caracter)
    console.log("El Caracter es una letra: " + palabra)
    for(let b=0;b <=palabra.length; b++){
      
      console.log("El Caracter en el if es: " + encontrado2)
      console.log("El Caracter en el if es: " + caracter)
      console.log("El Caracter en el if es: " + palabra[b])
      if(caracter === palabra[b]){
          if(caracter === encontrado2[b]){
            console.log("la letra "+caracter+" ya esta en el arreglo "+ encontrado2)

          }else{
            encontrado2.push(caracter)
            console.log("la letra es correcta")
            input = document.getElementById(b+1)
            console.log(input)
            if(input>palabra.length){
              comparadorPalabras()
            }else{
              input.disabled = false
              console.log("el contenido actual del encontrador2:"+encontrado2 )
              console.log("el contenido actual del encontrador2:"+encontrado2 )

              break;
            }
          }
        }else{
          console.log("la condicion no se cumplio")
        } 
      }
      console.log("sali del for")
    } else {
      alert("Sólo se permiten letras")
      //document.getElementsByTagName("input")[0].value = ""
  }
  
}

function validarCampo(){
  console.log("Estoy dentro del validador")
  let formulario = document.getElementById("formulario")
  let inputs = document.querySelectorAll("#formulario input")
  
  inputs.forEach((input) => {
    input.addEventListener('keyup', validador)
  })

  //formulario.addEventListener('')
}
 
function playGame(){ 
    selectWord();
    creadorElementos(palabra)
    validarCampo(palabra)
    console.log(palabra.length)
    
    
    //alert(`palabra con ${palabra.length} letras \n Ayuda ${ayuda}`) 

    /*while (encontrado.join() !== palabra.join()) { 
         
      buscar = window.prompt("Letra");
      
        console.log("estoy dentro del while")
        
        console.log(buscar)
        //console.log(buscarLetra(buscar)); 
        if (buscar === "." || fallo.length >= 5) { 
          break; 
        } 
      
    }

       
      if(fallo.length === 5 ){ 
        alert("Perdiste"); 
      }else if(encontrado.join() !== palabra.join()){ 
        alert("Fin del juego"); 
      }else{ 
          alert("ganaste"); 
      }       
 
      console.log(palabra) 
 
      encontrado=[] 
      fallo=[] */
} 
 
 
//playGame();
document.addEventListener("DOMContentLoaded", playGame, false)