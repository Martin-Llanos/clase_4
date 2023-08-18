//Tarea 4
function calcularPromedio(notaParciales){
    let promedio = 0;
    let totalNotas = 0;
    for(let i = 0; i < notaParciales.length; i++){
        totalNotas = totalNotas + notaParciales[i];
    }
    promedio = totalNotas/(notaParciales.length);
    return promedio;
}

let notasDeJuancito = [10, 10, 5, 7];
console.log("El promedio de juancito es: " + calcularPromedio(notasDeJuancito));