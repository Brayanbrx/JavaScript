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

funcionConPromesaAwait();





















