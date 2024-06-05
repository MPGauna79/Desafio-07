import './style.css';

//EJERCICIO 1//
let nombre = 'Maria Paula'
console.log('Nombre: '+nombre)

//EJERCICIO 2//

let edad = 45
console.log('Edad: '+edad)
console.log(typeof edad)

let precio = 7.55
console.log('Precio: '+precio)
console.log(typeof precio)

let ciudad = 'Rio Grande'
console.log(ciudad)
console.log(typeof ciudad)

let esEstudiante = true
console.log(esEstudiante)
console.log(typeof esEstudiante)

//EJERCICIO 3//

let nombre2 = 'Guillermo'
let apellido = 'Perez'
console.log('Hola, '+nombre2+' '+apellido)

//EJERCICIO 4//

let num1 = 5
let num2 = 7
let suma = num1 + num2
console.log(num1+'+'+num2+'='+suma)

let resta = num1 - num2
console.log(num1+'-'+num2+'='+resta)

let multiplicacion = num1 * num2
console.log(num1+'*'+num2+'='+multiplicacion)

let division = num1 / num2
console.log(num1+'/'+num2+'='+division)

//EJERCICIO 5//

let contador = 10
console.log(contador)
contador++
console.log(contador)
contador++
console.log(contador)
contador++
console.log(contador)

contador--
console.log(contador)
contador--
console.log(contador)
contador--
console.log(contador)

//EJERCICIO 6//

let person = prompt("Ingrese su nombre")
alert("Bienvenido "+person)

//EJERCICIO 7//

let radio = prompt("Ingrese el radio")
let area = 3.14 * radio^2
alert("area= "+area)

//EJERCICIO 8//

let temperaturacelsius = prompt("Ingrese la temperatura en celsius")
let temperaturafarenheit = (temperaturacelsius*1.8)+32
alert("Temperatura farenheit= "+temperaturafarenheit)

//EJERCICIO 9//

let numero1 = parseFloat(prompt("ingrese numero 1")) 
let numero2 = parseFloat(prompt("ingrese numero 2"))
let numero3 = parseFloat(prompt("ingrese numero 3"))
let sumanum = numero1+numero2+numero3
let promedio = sumanum/3
alert("promedio= "+promedio)

//EJERCICIO 10//

function numeroPositivo(n) {
  return n === 0 ? false : n > 0 ? "Es positivo" : "Es negativo";
}

console.log(numeroPositivo(1)); // Es positivo
console.log(numeroPositivo(0)); // false
console.log(numeroPositivo(-1)); // Es negativo

//EJERCICIO 11//

let edadUsuario = prompt ("ingrese su edad")

if ( edadUsuario < 18 ) { 
  alert('es menor de edad')
}

if ( edadUsuario > 18 ) {
  alert('es mayor de edad')
}

//EJERCICIO 12//

let diaSemana = prompt('Ingrese un numero \n 1. ')

switch (diaSemana) {
  case '1':
    console.log('Lunes')
    break;
  case '2':
      console.log('Martes')
    break; 
  case '3':
      console.log('Miercoles')
    break;   
  case '4':
      console.log('Jueves')
    break;
  case '5':
      console.log('Viernes')
    break;
  case '6':
      console.log('Sabado')
    break;
  case '7':
      console.log('Domingo')
    break;  


}


