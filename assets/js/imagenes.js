import Animales from "./consulta.js";


  const ani = document.getElementById("animal");

  
  ani.addEventListener("click", async () => {
    const { animales } = await Animales.getData();
    const aniNombre = animal.value;
    //template para modal//
    const imagenPreview = animales.find(p => p.name === aniNombre);
    const preview = document.getElementById("preview");
    preview.style.backgroundImage = `url("/assets/imgs/${imagenPreview.imagen}")`;
    
  

   /* document.getElementById("exampleModal")[1].innerHTML = imagenPreview; */  
  
});
 
     
/*   document.querySelectorAll(".animales img").forEach((i) => {
        i.addEventListener("click", (e) => {
        $(".exampleModal").modal("toggle")
        const imagenSrc = e.target.src;
        document.getElementById("preview").style.backgroundImage = `url(${imagenSrc})`;
       })
      }); No funciona >:(
 */