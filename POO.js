"use strict"

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, depto: ${this.departamento}`;   
    }

}

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

let resultado = '';
try{
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia';
    else if(resultado >=0) throw 'Valor positivo';
    else if(resultado < 0) throw 'Valor negativo';
}
catch(error){
    console.log(error);
}
finally{
    console.log('Termina revision de errores');
}