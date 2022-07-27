// creacion de constructor //

class Animal {
    constructor(nombre, edad, comentarios, img, sonido) {

        const Nombre = nombre;
        const Edad = edad;
        const Comentarios = comentarios;
        const Img = img;
        const Sonido = sonido;

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getComentarios = () => Comentarios;
        this.getImg = () => Img;
        this.getSonido = () => Sonido;

        this.setComentarios = (comentarios) => (Comentarios = comentarios); // se recibe como parametro asi mismo
     }
 // creacion de metodos //
     
 get Nombre() {
     return this.getNombre()
 }

 get Edad() {
    return this.getEdad()
}
get Comentarios() {
    return this.getComentarios()
}
get Img() {
    return this.getImg()
}
    
get Sonido() {
    return this.getSonido()
}
set Comentarios(comentarios) {
    return this.getComentarios(comentarios); // recibe y retorna la ejecucion del getter //
}

    }
    
    export default Animal;