import Animal from "./animal.js";

class Serpiente extends Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    
}
Sisear() {
    let sonido = this.getSonido();
    this.setSonido() // crear return de archivo sounds //
}
}
export { Serpiente };