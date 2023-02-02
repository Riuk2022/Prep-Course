// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
return(array[0]);
}
devolverPrimerElemento([1,2,3,4,5,6,'Jhon'])

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var array2 = array;
  return(array2[array2.length-1]);
}
devolverUltimoElemento([10, 10, 16, 12])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}
obtenerLargoDelArray([10, 10, 16, 12])

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let cont = [];
  var x =0;
  for(var i = 0; i <= array.length-1;i++){
    array[i]=array[i] + 1;
      x = array[i];
    cont.push(x);
  }
  return(cont);
}
incrementarPorUno([10, 10, 16, 12])

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);  
}
agregarItemAlFinalDelArray([10, 10, 16, 12], 10)

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let array3 = [];
  let contad = [];

  contad = array;
  array3 = array;
  
  contad.unshift(elemento)
  
  return(array);
}
agregarItemAlComienzoDelArray([10, 10, 16, 12], 10)

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:´

return(palabras.join(' '))
}
let myarr = ['Henry', 'JavaScript', 'Class']

dePalabrasAFrase(myarr)

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  //let array2 = [];
  //array2 = array
  if (array.includes(elemento)){
    return(true)
  }else{
    return(false)
  }
}
arrayContiene([10, 10, 16, 12], 10)

  function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)   ------------------------------------------------------ REDUCE
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let sum =  (accumulator, curr) => accumulator + curr;
    return(numeros.reduce(sum));
  }
  agregarNumeros([10, 10, 16])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i = 0, summ = 0, ArrayLen = resultadosTest.length;
            while (i < ArrayLen) {
                summ = summ + resultadosTest[i++];
        }
            return summ / ArrayLen;
        }
        var myArray = [1, 5, 2, 3, 7];  
        var a = promedioResultadosTest(myArray);
        //console.log(a)


        function numeroMasGrande(numeros) {
          // "numeros" debe ser una matriz de enteros (int/integers)
          // Devuelve el número más grande
          // Tu código:
         let ar = []
         ar = numeros;
         var mayor = 0;
         var f = ar.length;
        for(i = 0; i < f; i++){
            if (numeros[i] > mayor)
            {
                mayor = numeros[i];
            }
        }
        console.log(mayor)
        return(mayor)
        }
        numeroMasGrande([1, 5, 2, 3, 7])


        function multiplicarArgumentos() {
          // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
        // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
          // Escribe tu código aquí:
      
      var total = 0;
      if (arguments.length > 0){
        total = 1;
      for (var i = 0 ; i < arguments.length; i++){
          total *= arguments[i]
      }
      }
      return(total)
      }
      var a = multiplicarArgumentos(1,2,3,4);
      console.log(a);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  const notes = arreglo;
  mayorr = notes.filter(value => value > 18)
  console.log(mayorr.length)  
return(mayorr.length);

}
cuentoElementos([10, 10, 18, 21])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  const array4 = [
    {
      diaDeLaSeman: 1, nombre: 'Domingo',  dia: 'Es fin de semana'},
      {diaDeLaSeman: 2, nombre: 'Lunes',  dia: 'Es dia Laboral'},
      {diaDeLaSeman: 3, nombre: 'Martes',  dia: 'Es dia Laboral'},
      {diaDeLaSeman: 4, nombre: 'Miercoles',  dia: 'Es dia Laboral'},
      {diaDeLaSeman: 5, nombre: 'Jueves',  dia: 'Es dia Laboral'},
      {diaDeLaSeman: 6, nombre: 'Viernes',  dia: 'Es dia Laboral'},
      {diaDeLaSeman: 7, nombre: 'Sabado',  dia: 'Es fin de semana'},
    
  ];
  let diase = array4.find(item => item.diaDeLaSeman === numeroDeDia)
  return(diase.dia)
} 
diaDeLaSemana(2)

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var arry3 = String(n)

  var primerCaracter = arry3.charAt(0);
  var ev = Number(primerCaracter);
  if (ev === 9){
      return(true)
  }else{
      return(false)
  }
}
empiezaConNueve([9238383])

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  const val = arreglo[0];

  var x = arreglo.every(value => value === val) 
  return(x)
} 
todosIguales([20, 20, 10, 20 ])

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // var myarray2 = ["Enero", "Marzo", "Noviembre"]

  let meses = []
//let myarray2 = ['lo', 'que','quieres','comparar','es']
for(let i=0;i<array.length;i++){
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){    
    meses.push(array[i]);
}
}
if (meses.length < 3){
  return 'No se encontraron los meses pedidos'
}else {
  return (meses)
}


}
mesesDelAño(["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"])

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
let arraymc = [];
for (let i = 0; i < array.length - 1; i++) {
  if (array[i] > 100){
    arraymc.push(array[i])
  }
}return arraymc
}
mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22])

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let sumarray = []
  var suma = numero
  for (var i = 0; i < 10; i++) {
    suma = suma + 2
    if (suma === i ) break
    else {
      sumarray.push(suma)
    }
   } 
   if(i < 10){
    return('Se interrumpió la ejecución')
   }else return(sumarray)
}

breakStatement(2)
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let ultiarray = []
  ultsum = numero
  for(var i = 0; i < 10 ;i++) {
    if (i === 4 )
    {
      continue
    }  else {
      ultsum = ultsum + 2
      ultiarray.push(ultsum)
    }
 }
 return ultiarray
}
continueStatement(2)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
