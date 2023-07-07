
function pedirArrayUsuario() {
    let numeros=[];
    let num ;
    
    do {
        num = prompt("ingrese numero o q para salir");
        let numeroParseado= parseInt(num);
        if (numeroParseado !== "q"){
            
            numeros.push(num)
        }
            
        } while (num !== "q"); 
   return (numeros);
}

    let resulatdo = pedirArrayUsuario();
     console.log(resulatdo);
 





function calcularNumeroMagico(arrayNum) {
    let pares = array.filter (num => num % 2 === 0).reduce ((a,b)=> a + b ,0);
    let impares = array.filter (num => num % 2 !==0).reduce((a,b)=> a + b,0);

    
    return pares > impares ? pares :impares -pares;
}
 

function main() {
    let arrayUsuario = pedirArrayUsuario();
    let numeroMagico = calcularNumeroMagico(arrayUsuario);
    alert(numeroMagico)
}