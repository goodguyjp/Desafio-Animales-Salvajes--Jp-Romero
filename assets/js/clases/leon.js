import Animal from "./animal.js";

class Leon extends Animal {
    constructor(nombre, edad, comentarios, img, sonido) {
        super(nombre, edad, comentarios, img, sonido);
    
}
Rugir() {
    let sonido = this.getSonido();
    this.setSonido() // crear return de archivo sounds //
}
}
export { Leon };