import Animal from "./animal.js";

class Oso extends Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    
}
Grunir() {
    let sonido = this.getSonido();
    this.setSonido() // crear return de archivo sounds //
}
}
export { Oso };