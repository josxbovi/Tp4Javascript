/*Rectángulos
Dificultad:  🟢
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    modificarAlto(alto) {
        this.alto = alto;
    }
    modificarAncho(ancho) {
        this.ancho = ancho;
    }
    mostrarAlto() {
        document.write("<p><br>El Alto es: "+this.alto+"</p>");
    }
    mostrarAncho() {
        document.write("<p>El Ancho es: "+this.ancho+"</p>");
    }
    calcularPerimetro() {
        document.write("<p>El Perímetro es: "+((this.alto*2)+(this.ancho*2))+"</p>");
    }
    calcularArea() {
        document.write("<p>El Área es: "+(this.alto*this.ancho)+"</p>");
    }
}

let rectangulo = new Rectangulo(10, 20);
rectangulo.mostrarAlto();
rectangulo.mostrarAncho();
rectangulo.calcularPerimetro();
rectangulo.calcularArea();
rectangulo.modificarAlto(20);
rectangulo.modificarAncho(30);
rectangulo.mostrarAlto();
rectangulo.mostrarAncho();
rectangulo.calcularPerimetro();
rectangulo.calcularArea();
