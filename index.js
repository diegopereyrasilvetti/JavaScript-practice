"use strict";

var name = "diego"; // var ya no se utiliza, se utiliza la variable "let"
let lastName = "pereyra";
const sex = "masculino";

console.log(name+" "+lastName) // es una funcion para ver el contenido en consola

// Tipos de datos
let house = "home" // String - texto
let city = "moron"
let cp = 1708 // Number
let isMarried = false // boolean = true / false 
let secondName = null // elegimos nosotros que este vacio
let user = undefined // javascript lo elige cuando no encuentra valor 

const persona = {
    name: 'Diego',
    age: 36
}

console.log(persona.name)

const lenguajes = ['html', 'css', 'taildwind', 'javascript', 'python']
const numeros = [1,2,3,4]
const combinado = ['html', 324345, persona]


const productos = [{name: 'procesador amd ryzen ', price: 244444, stock: 5}, {name: 'procesador intel 7', price: 9854570, stock: 20}]

console.log(productos)

console.log(productos[0])

console.log(productos[0].price)


const ahora = new Date()
const anno = ahora.getFullYear()
const mes = ahora.getMonth()
const dia = ahora.getDate()
const horas = ahora.getHours()
const minutos = ahora.getMinutes()
const segundos = ahora.getSeconds()

console.log(ahora)

console.log(segundos)

console.log(anno)

console.log(`hoy es ${dia}-${mes+1}-${anno}`)
console.log(new Date(1990,5,20))
