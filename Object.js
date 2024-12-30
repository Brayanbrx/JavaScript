class Persona{

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

}

class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

}


let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre);
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());





