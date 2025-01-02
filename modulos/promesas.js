//async, indica que una funcion regresa una promesa
//await espera el resultado de una promesa
async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then( valor => console.log(valor) );

//async /await
//await procesa una promesa

async function funcionConPromesaAwait(){
    let miPromesa = new Promise (resolver => { 
        resolver('Promesa con await');
    })

    console.log ( await miPromesa );
}

//funcionConPromesaAwait();


// Promesas, await, async y setTimeOut
//no se puede usar await si no esta dentro de una funcion que este marcada con async
async function funcionConPromesaAwaitTimeOut(){
    console.log('inicio de funcion')
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000); //3 segundos, para que resuelva
    });
    console.log (await miPromesa); //el fin depende de que termine de procesarse la promesa gracias a await
    console.log('Fin de funcion')
}

funcionConPromesaAwaitTimeOut();
















