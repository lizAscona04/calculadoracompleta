const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = calcFlujo(DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*1;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*2;
        resto -= aux;
    }
    flujo += resto*4;
    return flujo;
}
function calcularDosis(peso) {
    if (peso <= 30) {
        // Aplicar función Holliday
        let aux = peso - 10;
        if (peso <= 20) {
            let resultado = (peso - 20) + 20;
            let dosisDiaria = resultado + 1500;
            console.log("Dosis diaria:", dosisDiaria);
        } else if (peso > 10 && peso <= 20) {
            let resultado = (peso - 10) * 50;
            let dosis = resultado + 1000;
            console.log("Dosis:", dosis);
        } else {
            let dosis = peso / 100; // Reemplazando el operador *
            console.log("Dosis:", dosis);
        }
    } else {
        // Aplicar función superficie corporal
        let dosis = (peso * 4 + 7) / (peso + 90);
        let result1 = dosis * 1500;
        let result2 = dosis * 2000;
        let mantenimiento = dosis / 24;
        console.log("Result1:", result1);
        console.log("Result2:", result2);
        console.log("Mantenimiento:", mantenimiento);
    }
}