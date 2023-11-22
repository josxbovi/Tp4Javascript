/*Crear objetos
Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

let auto = {
    color: "rojo",
    marca: "Ferrari",
    modelo: "F40",
    encendido: false,
    encender: function () {
        this.encendido = true;
        document.write("<p>Auto encendido</p>");
    },
    apagar: function () {
        this.encendido = false;
        document.write("<p>El auto se apagó</p>");
    }
}

auto.encender();
auto.apagar();

