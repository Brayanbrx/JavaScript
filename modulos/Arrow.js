function miFuncion(){
    console.log('Saludos xD');
}

//miFuncion();

let miArrow = () => {
    console.log('saludos Arrow');
}

//miArrow();

//CALLBACK FUNCTIONS

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback('Resultado: ' + res);
}

//sumar(5,3,imprimir);

//Llamadas asincronas con setTimeout
function miFuncCallback(){
    console.log('saludo asincrono despues de 3 seg');
}

//setTimeout(miFuncCallback, 3000); //milisegundos equivalente a 3 seg


//setTimeout( () => console.log('saludo asincrono 2'), 4000);


//PROMESAS

let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resolvio correcto');
    else
        rechazar('Se produjo un error');
});

//miPromesa.then(valor => console.log(valor), error => console.log(error));
//miPromesa.then( valor => console.log(valor) ).catch( error => console.log(error) );


let promesa = new Promise((resolver) => {
    setTimeout( ()=> resolver('Saludos con promesa y timeout'), 3000);
});

promesa.then(valor => console.log(valor));





