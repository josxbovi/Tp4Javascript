/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(isbn, titulo, autor, numPaginas) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }
    get getIsbn() {
        return this.isbn;
    }
    set setIsbn(isbn) {
        this.isbn = isbn;
    }
    get getTitulo() {
        return this.titulo;
    }
    set setTitulo(titulo) {
        this.titulo = titulo;
    }
    get getAutor() {
        return this.autor;
    }
    set setAutor(autor) {
        this.autor = autor;
    }
    get getNumPaginas() {
        return this.numPaginas;
    }
    set setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }
    mostrarLibro() {
        document.write("El libro " + this.titulo + " con ISBN " + this.isbn + " creado por el autor " + this.autor + " tiene " + this.numPaginas + " páginas. <br>");
    }
}

let libro1 = new Libro("978-84-204-2613-7", "El Quijote", "Cervantes", 200);
let libro2 = new Libro("978-09-385-0132-9", "Estudio en Escarlata", "Conan Doyle", 216);
libro1.mostrarLibro();
libro2.mostrarLibro();
if (libro1.getNumPaginas > libro2.getNumPaginas) {
    document.write("El libro " + libro1.getTitulo + " tiene más páginas que el libro " + libro2.getTitulo);
} else if (libro1.getNumPaginas < libro2.getNumPaginas) {
    document.write("El libro '" + libro2.getTitulo + "' tiene más páginas que el libro '" + libro1.getTitulo +"'");
} else {
    document.write("Los dos libros tienen el mismo número de páginas.");
}