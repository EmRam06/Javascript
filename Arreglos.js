let nombres= ["Ana", "Juan", "Carlos"]

nombres.push("Luis")

console.log(nombres)

nombres.pop()

console.log(nombres)

let index = nombres.indexOf("Juan")

if(index!==-1){
  console.log("El nombre se encuentra en el arreglo")
}
else{
  console.log("El nombre no se encuentra")
}

const numeros = [4,9,16,25,36]

const raiz = numeros.map(Math.sqrt)

console.log(raiz)
