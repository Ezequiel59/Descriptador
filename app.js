// codigo para codificar
// si hace click comienza la encriptacion del 

// let codigo = ""
// let encriptado = codigo.split("");
// let desifrado;
// console.log(encriptado)

//se encapsula en una funcion para que sea llamada
// cuando se haga clink en el boton
function encriptar(){
    let codigo = document.getElementById("textoIncriptar").value;
    let encriptado = codigo.split("");
    let parrafo = document.getElementById("textoEncriptadoResultado")
    // let desifrado;
    // console.log(encriptado)

    for (let index = 0; index < encriptado.length; index++) { //comprueba si hay valores parecido dentro del array
        if (encriptado[index] == "a") {
             encriptado[index] = "ai"
        } else if(encriptado[index] == "e"){
             encriptado[index] = "enter"
        } else if(encriptado[index] == "i"){
             encriptado[index] = "imes"
        } else if(encriptado[index] == "o"){
             encriptado[index] = "ober"
        } else if(encriptado[index] == "u"){
             encriptado[index] = "ufat"
        }
     }

    if(document.getElementById("textoIncriptar").value != 0){
       parrafo.innerText = encriptado.join("")
    }
     
} 

function desencriptar(){
     let codigo = document.getElementById("textoIncriptar").value;
     let encriptado = codigo.split("");
     let parrafo = document.getElementById("textoEncriptadoResultado")

     if(document.getElementById("textoIncriptar").value != 0){
          parrafo.innerText = encriptado.join("")
       }
}


let parrafo = document.getElementById("desencriptar")
parrafo.addEventListener("click", desencriptar)

parrafo = document.getElementById("botonEncriptar")
parrafo.addEventListener("click", encriptar)
