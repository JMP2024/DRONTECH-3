const counters = document.querySelectorAll('.number');
const speed = 200; // Ajusta la velocidad del contador

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Cómo incrementar el número
    const inc = target / speed;

    // Si el contador es menor al número objetivo
    if (count < target) {
      // Añade inc al contador y actualiza el valor en el DOM
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
      // Mostrar el modal cuando el contador llegue al objetivo
      showModal();
    }
  };

  updateCount();
});

// ANUNCIO
document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById('adModal');
  const closeButton = document.getElementById('closeButton');
  const audio = new Audio('explosion-80108.mp3'); // Asegúrate de que la ruta al archivo de audio sea correcta

  // Function to show the modal and play the sound
  const showModal = () => {
      modal.style.display = 'block';
      audio.play(); // Reproduce el sonido al mostrar el modal
  };

  // Function to hide the modal and stop the sound
  const hideModal = () => {
      modal.style.display = 'none';
      audio.pause(); // Detiene la reproducción del sonido al ocultar el modal
      audio.currentTime = 0; // Reinicia el sonido al inicio
  };

  // Show the modal and play the sound once after 15 seconds
  setTimeout(showModal, 15000);

  // Close the modal and stop the sound when the close button is clicked
  closeButton.addEventListener('click', hideModal);

  // Close the modal and stop the sound if the user clicks outside the modal content
  window.addEventListener('click', (event) => {
      if (event.target == modal) {
          hideModal();
      }
  });
});


//HAMBURGUESA
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

