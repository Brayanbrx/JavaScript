function miFuncion(){
    console.log('Saludos xD');
}

miFuncion();

let miArrow = () => {
    console.log('saludos Arrow');
}

miArrow();

//CALLBACK FUNCTIONS

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback('Resultado: ' + res);
}

sumar(5,3,imprimir);

//Llamadas asincronas con setTimeout
function miFuncCallback(){
    console.log('saludo asincrono despues de 3 seg');
}

setTimeout(miFuncCallback, 3000); //milisegundos equivalente a 3 seg


setTimeout( () => console.log('saludo asincrono 2'), 4000);


//PROMESAS

let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error');
});

miPromesa.then(
    valor
);
