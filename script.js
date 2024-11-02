document.addEventListener("DOMContentLoaded", () => {
    const xrayButton = document.getElementById("xrayButton");
    const skeletonImage = document.getElementById("skeletonImage");
    const opacityControl = document.getElementById("opacityControl");
    const opacitySlider = document.getElementById("opacitySlider");
    const container = document.querySelector(".container");
  
    let xrayActive = false; // Variable para rastrear el estado de rayos X
  
    xrayButton.addEventListener("click", () => {
      xrayActive = !xrayActive; // Cambia el estado de rayos X
      if (xrayActive) {
        skeletonImage.style.opacity = opacitySlider.value;
        opacityControl.style.display = "block";
        body.classList.add("xray-mode"); // Agrega la clase para invertir colores
        xrayButton.textContent = "Desactivar Rayos X"; // Cambia el texto del botón
      } else {
        skeletonImage.style.opacity = 0;
        opacityControl.style.display = "none";
        container.classList.remove("xray-mode"); // Quita la clase para volver a colores normales
        xrayButton.textContent = "Activar Rayos X"; // Cambia el texto del botón
      }
    });
  
    opacitySlider.addEventListener("input", () => {
      skeletonImage.style.opacity = opacitySlider.value;
    });
  });
  