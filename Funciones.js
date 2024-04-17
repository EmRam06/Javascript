function suma(x,y,z){
  console.log(x+y+z)
}
function multiplica(x,y,z){
  console.log(x*y*z)
}
function esString(x,y,z){
  console.log(typeof(x)=="string" && typeof(y)=="string" && typeof(z)=="string")
}
function verificaVocales(x){
  const esVocal = /^[aeiou]$/i.test(x)
  if(esVocal){
    console.log("Es una vocal")
  }
  else{
    console.log("No es vocal")
  }
}

suma(1,1,1)
multiplica(2,3,4)
esString("Hola","Mundo","Gil")
esString("Hola","Mundo",24)
verificaVocales("a")
