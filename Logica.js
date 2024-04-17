function solicitarNumeros(){
  let num1 = prompt("Ingresa el primer numero: ")
  let num2 = prompt("Ingresa el segundo numero: ")
  
  if(parseInt(num1)<parseInt(num2)){
    alert(num1+" es menor que "+num2)
  }
  if(parseInt(num1)>parseInt(num2)){
    alert(num1+" es mayor que "+num2)
  }
  if(parseInt(num1)==parseInt(num2)){
    alert("Son iguales")
  }
}

let var1=true
let var2=false

console.log(var1 && var2) //false

console.log(var1 || var2) //true

console.log(!var1) //false
console.log(!var2) //true
