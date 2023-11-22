/*Agenda telefónica - Dificultad:  🟢🟡🔴

7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getTelefono() {
        return this.telefono;
    }
    set setTelefono(telefono) {
        this.telefono = telefono;
    }

    equals(contacto) {
        return this.nombre === contacto.getNombre;
    }

    toString() {
        return `${this.nombre} - ${this.telefono}`;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = [];
        this.tamano = tamano;
    }

    aniadirContacto(contacto) {
        if (this.contactos.length < this.tamano) {
            this.contactos.push(contacto);
            console.log(`Contacto ${contacto.getNombre} añadido`);
        } else {
            console.log("Agenda llena");
        }
    }

    existeContacto(nombre) {
        let contacto = this.contactos.find(c => c.getNombre === nombre);
        if (contacto) {
            console.log("Contacto encontrado");
        } else {
            console.log("Contacto no encontrado");
        }
    }

    listarContactos() {
        this.contactos.forEach(c => console.log(c.toString()));
    }

    buscarContacto(nombre) {
        let contacto = this.contactos.find(c => c.getNombre === nombre);
        if (contacto) {
            console.log(contacto.toString());
        } else {
            console.log("Contacto no encontrado");
        }
    }

    eliminarContacto(contacto) {
        if (this.existeContacto(contacto)) {
            this.contactos = this.contactos.filter(c => !c.equals(contacto));
            console.log(`Contacto ${contacto.getNombre} eliminado`);
        } else {
            console.log("Contacto no encontrado");
        }
    }

    agendaLlena() {
        return this.contactos.length === this.tamano;
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}

let agenda = new Agenda();
let opcion = 0;
while (opcion !== 8) {
    opcion = parseInt(prompt("1- Añadir contacto\n2- Existe contacto\n3- Listar contactos\n4- Buscar contacto\n5- Eliminar contacto\n6- Agenda llena\n7- Huecos libres\n8- Salir\n- Cualquier otro número para salir"));
    switch (opcion) {
        case 1:
            let nombre = prompt("Nombre");
            let telefono = prompt("Teléfono");
            agenda.aniadirContacto(new Contacto(nombre, telefono));
            break;
        case 2:
            let nombre2;
            nombre2 = prompt("Nombre");
            agenda.existeContacto(nombre2);
            break;
        case 3:
            agenda.listarContactos();
            break;
        case 4:
            nombre = prompt("Nombre");
            agenda.buscarContacto(nombre);
            break;
        case 5:
            nombre = prompt("Nombre");
            telefono = prompt("Teléfono");
            agenda.eliminarContacto(new Contacto(nombre, telefono));
            break;
        case 6:
            if (agenda.agendaLlena()) {
                console.log("Agenda llena");
            } else {
                console.log("Agenda no llena");
            }
            break;
        case 7:
            console.log("Huecos libres: " + agenda.huecosLibres());
            break;
        case 8:
            console.log("Adiós");
            break;
        default:
            console.log("Adiós");
            opcion = 8;
            break;
    }
}



