import Animal from "./animal.js";

import { Leon } from "./leon.js";
import { Lobo } from "./lobo.js";
import { Oso } from "./oso.js";
import { Serpiente } from "./serpiente.js";
import { Aguila } from "./aguila.js";

// creacion de instancias, llamadas al dom //

let listaAnimales = [];



document.getElementById("btnRegistrar").addEventListener("click", () => {

    let nombre = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let comentarios = document.getElementById("comentarios");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imagenSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);

  let nuevoAnimal;

  if (nombre.value == "Leon") {
      nuevoAnimal = new Leon(nombre.value, edad.value, comentarios.value, imagenSrc);
  }else if (nombre.value == "Lobo") {
      nuevoAnimal = new Lobo (nombre.value, edad.value, comentarios.value, imagenSrc);
  }else if (nombre.value == "Oso") {
    nuevoAnimal = new Oso(nombre.value, edad.value, comentarios.value, imagenSrc);
  }else if (nombre.value == "Serpiente") {
    nuevoAnimal = new Serpiente(nombre.value, edad.value, comentarios.value, imagenSrc);
  }else if (nombre.value == "Aguila") {
    nuevoAnimal = new Aguila(nombre.value, edad.value, comentarios.value, imagenSrc);
  };




listaAnimales.push(nuevoAnimal);
reloadTable();
  
});


// mostrar en la tabla :) //

const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    animalesTemplate.innerHTML = "";
    listaAnimales.forEach((animal, indice) => {
        animalesTemplate.innerHTML+= `<div class="px-3 pb-2 animal" data-animal="${animal.getNombre()}">
        <div class="card"style="width: 18rem; background: #404040 text-white">
        <h5 class="card-title"> Nombre: ${animal.getNombre()}</h5>
          <img src="${animal.getImg()}" class="card-img-top " alt="${animal.getNombre()}">
          <h6 class="card-text">Comentarios: ${animal.getComentarios()}</h6>
          <h6 class="card-text">Edad: ${animal.getEdad()}</h6>
          
          
        </div>
        </div>
      </div>
      
      `;
    
    });

};