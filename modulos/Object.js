class Persona{
    static contadorPersonas = 0; //atributo de clase
    //email = 'Valor default email'; //atributo de objeto

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }else{
            console.log('Se superaron el maximo de objetos permitidos');
        }
        
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    nombreCompleto(){
        return this.idPersona.toString() +' '+ this._nombre + ' ' + this._apellido;
    }

    //Static se asocia con la clase, no con objetos
    static saludar(){
        console.log('Saludos :B');
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
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }


}


let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.nombre);
console.log(persona1.nombreCompleto());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

Persona.saludar();
console.log(Persona.contadorPersonas);




