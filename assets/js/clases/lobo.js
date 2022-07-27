import Animal from "./animal.js";

class Lobo extends Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    
}
Aullar() {
    let sonido = this.getSonido();
    this.setSonido() // crear return de archivo sounds //
}
}
export { Lobo };