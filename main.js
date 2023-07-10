//este ejercicio lo realizamos en la video llamada.
function pedirArrayUsuario() {
    // variable que aloje los datos,q ingrese el usuario
    //pedirle al usuario que ingrese un numero o q para salir.
    //array devuelve los numeros ingresado.
    let numeros=[];
    let valorIngresado;
    do {
      valorIngresado= prompt("Ingresar un numero o q para salir")
      if(valorIngresado !== "q") {
        valorIngresado= parseInt(valorIngresado)
        numeros.push(valorIngresado)
      }
    } while(valorIngresado !== "q")   
    return numeros                          
  } 



 
function calcularNumeroMagico(array){
    //  numeros pares e impares 
    //creo variable y su parametro ,devuleva el resultado
    let numerosPares= array.filter(
      function(numero){
        return numero % 2 == 0 
      }
    );
      console.log(numerosPares)
    
    let numerosImpares= array.filter(
      function(numero){
        return numero % 2 !== 0 
      }
    ); 
      console.log(numerosImpares)
      //comparar los arrays 
      //hacer la condicion  si hay pares, se sumen  y si hay impares se resten.
      if(numerosPares.length > numerosImpares.length ){
        let sumar=array.reduce(function(total, array){return total + array}, 0);
        return sumar;
      }else {
        let restar=array.reduce(function(total, array){return total - array}, 0);
        return restar;
      }
      
  
   }
   
//    console.log(calcularNumeroMagico(numeroArray))
  
  
  function main() {
   //la funcion pedirArrayUsuario,guarda el resultado
    let arrayUsuario = pedirArrayUsuario();
    //pasa funcion y la guarda 
    //lo muestra con un alerta.
    calcularNumeroMagico(arrayUsuario);
  }
  
  main()