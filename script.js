// Ejercicios de bucles

// 0) Agregar en el ejercicio de home banking la posibilidad de seguir operando hasta que el usuario decida salir.

// 1) Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10). 
    // for (let i = 1; i <= 10; i++) {
    //     console.log(i);
    //  }

// 2) Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.
    // let suma =0;
    // for (let i = 1 ; i <=5; i++) {
    //     let numero = parseFloat(prompt("Ingrese un numero"));
    //     console.log(`La interaccion ${i} es igual al numero ${numero}`);
    //     suma= suma + numero;
    //     console.log(`La interaccion ${i} es igual a la suma ${suma}`);

    // }
    // console.log(suma)
// 3)Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
    // let numero1 = parseInt(prompt("¿Cuantos numeros quiere sumar?"))
    // let intentos= 0;
    // let suma= 0;
    // do {
    //     let numero= parseInt(prompt("ingrese numero"))
    //     intentos++;
    //     suma = suma + numero
    // } while (intentos<numero1);

    // console.log(`La suma es igual a ${suma}`)

// 4)Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
    // let suma= 0;
    // let numero;
    //     while(numero !== 0) {
    //         numero= parseInt(prompt("ingrese numeros, cuando ingre se 0 se cortara y mostrara el resultado de los numero ingresados"));
    //         suma = suma + numero;
    //     }
    // alert(`Usted ingreso el ${numero}, la suma de todos los numero ingresados es ${suma}`);


// 5)Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.
    // let suma= 0;
    // let numero;
    // let cantidadNumero=0;
    //     while(numero !== 0) {
    //         numero= parseInt(prompt("ingrese numeros, cuando ingre se 0 se cortara y mostrara el resultado de los numero ingresados"));
    //         suma = suma + numero;
    //         cantidadNumero++
    //     }
    // promedio = suma/(cantidadNumero-1);
    // alert(`Usted ingreso el ${numero}, el promedio de la suma es igual a  ${promedio}`);


// 6)Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 
    // let numero = parseInt(prompt("ingrese el numero y le mostraremos desde el 1 hasta el que ingreso"));
    // for (let i = 1; i<=numero; i++) {
    //   console.log(i)
       
    // }

// 7)Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 
    // let numero = parseInt(prompt("Ingrese el primer numero"));
    // let numero1 = parseInt(prompt("Ingrese el segundo numero"));
    // for (let i = numero +1 ; i<numero1; i++) {
    //     console.log(i);
        
    // }

// 8)Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
    // let ingresar= parseInt(prompt("¿Cuantos numero quiere ingresar?"));
    // let mayor=0;
    // let intentos=0  ;
    // do {
    //     let numero = parseInt(prompt("Ingrese numero"));
    //     if(mayor<numero){
    //         mayor=numero;
    //     }
    //     intentos++;
    // } while (intentos<ingresar);
    // console.log(`El numero mayor que ingresaste es ${mayor}`)

//9) Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.
    // let ingresar= parseInt(prompt("¿Cuantos numero quiere ingresar?"));
    // let menor=99999999999999999;
    // let intentos=0  ;
    // do {
    //     let numero = parseInt(prompt("Ingrese numero"));
    //     if(menor>numero){
    //         menor=numero;
    //     }
    //     intentos++;
    // } while (intentos<ingresar);
    // console.log(`El numero menor  que ingresaste es ${menor}`)
//10 Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)

    // let numero =prompt("ingrese un numero");
    // for (let i = 0; i < numero; i++) {
    //     console.log(`Te paso el numero ${numero} a caracteres, ${numero.replace(numero,"*").repeat(numero)}`)
        
    // }

//11) Realizar un programa que pida la base y el exponente y calcule la potencia. 
    // let base = parseInt(prompt("Ingrese la base"));
    // let exponente = parseInt(prompt("Ingrese el exponente"));
    // let resultado=1;

    // for (let i = 0  ; i < exponente; i++) {
    //      resultado = resultado *base
  
    // }
    // console.log(`El resultado es igual a ${resultado}`)
//12) Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )
    // let numero = parseInt(prompt("Ingrese un numero para saber su factorial"));
    // let total = 1; 
	// for (i=1; i<=numero; i++) {
	// 	total = total * i; 
	// }
    // console.log(total);

//13) Realizarrograma que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)
//   let numero = parseInt(prompt("ingrese un numero y le diremos sus divisores"));
//     for (let i = numero; i > 0; i--) {
//       if (numero%i===0) {
//         console.log(i);
//          }
//           }


//14) Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
// H
// O
// L
// A

    // let numero = parseInt(prompt("Ingrese un numero"));
    // let cadena = prompt("Ingrese una cadena de caracteres");
   
    // for (let i = 0; i < numero ; i++) {
    //     console.log(cadena.charAt(i).toUpperCase()); 
    
    // }


//15) Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 
    //   lista = prompt("Ingrese una lista de supermercado, cuando no quiera ingresar mas, escriba fin");
    //   console.log(lista.replaceAll(" ",","));
  
//16) Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.

// let resto;
// do {
//     let numero = parseInt(prompt("ingrese un numero"));
//     if (numero%3===0) {
//         resto=0;
//     }else{
//         console.log(numero)
//     }
// } while (resto!=0);
    



// Bonus desafíos matemáticos !!

// Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato. 

    let suma= 0;
    let numero;
    let cantidadNumero=0;
        while(numero !== 0  ) {
            numero= parseInt(prompt("ingrese numeros, cuando ingre se 0 se cortara y mostrara el resultado de los numero ingresados"));
            if (numero=1,2,3,4,5,6,7,8,9,10) {
                suma = suma + numero;
                cantidadNumero++
            }else{
                alert("Volver a pedir dato")
            }
            
          
        }
    promedio = suma/(cantidadNumero-1);
    alert(`Usted ingreso el ${numero}, el promedio de la suma es igual a  ${promedio}`);

// Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente. 
// Realizar un programa que pida dos números y diga su máximo común divisor. 
// (notas sobre el Máximo Común Divisor: 
// - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
// - No puede ser mayor al valor de la mitad del menor número o sí mismo.
//  (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
//  (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).
// Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100.
// Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos  y mostrarlo.
// Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci. 
