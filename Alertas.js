function mostrarAlerta(){
  alert("Esta es una alerta")
}
function solicitarConfirmacion(){
  let respuesta = confirm("Estas Seguro?")
    if(respuesta){
      alert("Aceptaste")
    }
    else{
      alert("No aceptaste")
    }
}
function solicitarInformacion(){
  let numero = prompt("Dame un numero?")
  
  if(numero){
    alert(parseInt(numero)+1)
  }
  else{
    alert("No has introducido numero")
  }
}
