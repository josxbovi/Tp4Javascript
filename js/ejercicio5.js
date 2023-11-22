/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */

class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
        this.dni = this.generarDNI();
    }

    mostrarGeneracion() {
        if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
            document.write("Pertenece a la generación Silent Generation. <br>");
            document.write("Rasgo característico: <br>");
            document.write("La generación silenciosa es una generación de personas nacidas entre 1928 y 1945. <br>");
            document.write("Austeridad <br>");
            document.write("La circunstancia historica que los caracteriza son los Conflictos Bélicos. ");
            document.write("<br>");
        } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
            document.write("Pertenece a la generación Baby Boom. <br>");
            document.write("Rasgo característico: <br>");
            document.write("La generación del baby boom es una generación de personas nacidas entre 1949 y 1968. <br>");
            document.write("La circunstancia histórica es la Paz y explosión demográfica <br>");
            document.write("También se caracterizan por ser personas muy ambiciosas. ");
            document.write("<br>");
        } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
            document.write("Pertenece a la generación X. <br>");
            document.write("Rasgo característico: <br>");
            document.write("La generación X es una generación de personas nacidas entre 1969 y 1980. <br>");
            document.write("La circunstancia histórica es la crisis del 73 y transición española<br>");
            document.write("Esta generación se caracteriza por la obsesión con el éxito. ");
        
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            document.write("Pertenece a la generación Y. <br>");
            document.write("Rasgo característico: <br>");
            document.write("La generación Y es una generación de personas nacidas entre 1981 y 1993. <br>");
            document.write("La circunstancia histórica es el inicio de la digitalización <br>");
            document.write("Esta generación se caracteriza por la frustración. ");
            document.write("<br>");
        } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
            document.write("Pertenece a la generación Z. <br>");
            document.write("Rasgo característico: <br>");
            document.write("La generación Z es una generación de personas nacidas entre 1994 y 2010. <br>");
            document.write("La circunstancia histórica es la expansión masiva de internet <br>");
            document.write("Esta generación se caracteriza por irreverencia. ");
            document.write("<br>");
        } 
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write("Es mayor de edad. <br><br>");
        } else {
            document.write("No es mayor de edad. <br><br>");
        }
    }

    generarDNI() { //genera un número aleatorio de 8 cifras
        let dni = Math.floor(Math.random() * (99999999 - 10000000)) + 10000000;
        return dni;
    }

    mostrarDatos() {
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Edad: " + this.edad + "<br>");
        document.write("Sexo: " + this.sexo + "<br>");
        document.write("Peso: " + this.peso + "<br>");
        document.write("Altura: " + this.altura + "<br>");
        document.write("Año de nacimiento: " + this.añoNacimiento + "<br>");
        document.write("DNI: " + this.dni + "<br><br>");
    }

}

let persona1 = new Persona("Juan", 20, "H", 70, 1.80, 2000);
let persona2 = new Persona("Ana", 15,"M", 60, 1.70, 2005);
let persona3 = new Persona("Pedro", 40,"H", 80, 1.90, 1980);


persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.generarDNI();

persona2.mostrarDatos();
persona2.mostrarGeneracion();
persona2.esMayorDeEdad();
persona2.generarDNI();

persona3.mostrarDatos();
persona3.mostrarGeneracion();
persona3.esMayorDeEdad();
persona3.generarDNI();


