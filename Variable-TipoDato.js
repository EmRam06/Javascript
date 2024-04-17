function variable(){
let miString="Hello World"
let miNumero = 42
let miBooleano = false
let miNull = null
let miUndefined
let miBigInt=BigInt(123)

console.log(typeof(miString))
console.log(typeof(miNumero))
console.log(typeof(miBooleano))
console.log(typeof(miNull))
console.log(typeof(miUndefined))
console.log(typeof(miBigInt))
}

function solicitarDato(){
  let dato = prompt("Ingresa un dato")
  if (!isNaN(dato)){
    console.log("Es un numero")
  }
  else if (dato=="true"||dato=="false"){
    console.log("Es un booleano")
  }
  else{
    console.log("Es un string")
  }
}
solicitarDato()
