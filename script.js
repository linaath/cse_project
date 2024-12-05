let currentIndex = 1;
const cards = document.querySelectorAll('.card');

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.toggle('active', index === currentIndex);
  });
}

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + cards.length) % cards.length;
  updateCarousel();
}

// Initialize the carousel
updateCarousel();
