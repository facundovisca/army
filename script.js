document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("image-container");
    var numImages = 8; // Cambia al número total de tus imágenes
    var firstInteraction = false; // Bandera para controlar la primera interacción
  
    // Generar imágenes en la cuadrícula
    for (var i = 0; i < 128; i++) {
      var imageWrapper = document.createElement("div");
      imageWrapper.classList.add("image-container");
  
      var image = new Image();
      var index = Math.floor(Math.random() * numImages) + 1;
      image.src = "data/" + index + ".png";
      image.classList.add("image");
  
      imageWrapper.appendChild(image);
      imageContainer.appendChild(imageWrapper);
    }
  
    //temporizador para la primera interacción
    setTimeout(function() {
      firstInteraction = true;
    }, 2000); // Retardo de 2 segundos
  
    //  evento para revelar imágenes al pasar el mouse
    var images = document.querySelectorAll(".image");
    images.forEach(function(image) {
      image.addEventListener("mouseenter", function() {
        if (firstInteraction) {
          if (parseFloat(getComputedStyle(image).opacity) < 1) {
            image.style.opacity = "1";
          }
        }
      });
    });
  });
  