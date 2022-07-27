import Animal from "./animal.js";

class Aguila extends Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    
}
Chillar() {
    let sonido = this.getSonido();
    this.setSonido() // crear return de archivo sounds //
}
}
export { Aguila };