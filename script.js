
    const track = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel img');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    let index = 0;

    function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  }

  next.addEventListener('click', () => {
        index = (index + 1) % images.length;
    updateCarousel();});

  prev.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

    window.addEventListener('resize', updateCarousel);
