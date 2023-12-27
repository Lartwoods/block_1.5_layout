let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  // slidesPerView: 1.2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


  let cards = Array.from(document.querySelectorAll('.brand-card'));
  let button = document.querySelector('.brand-list__button');
  let visibleCount = 6; 
  let isCardsVisible = false;


  button.addEventListener('click', () => {
    isCardsVisible = !isCardsVisible;
    changeVisibility();
  });

  function changeVisibility() {
    if (window.innerWidth < 768) {
      cards.forEach(card => card.classList.add('hidden'));
      button.classList.add('hidden');
      return;
    }
    cards.forEach((card, index) => {
      if (isCardsVisible || index < visibleCount) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    if (isCardsVisible) {
      button.classList.add('button-hide');
      button.classList.remove('button-show')
      button.textContent = 'Скрыть'
    } else {
      button.classList.add('button-show');
     button.classList.remove('button-hide');
     button.textContent = 'Показать ещё'
    }
    button.classList.toggle('hidden', !isCardsVisible && cards.length <= visibleCount);
  
  }

  function handleResize() {
    let visible;

    if (window.innerWidth >= 768 && window.innerWidth < 1120) {
      visible = 6;
    } else if (window.innerWidth >= 1120) {
      visible = 8;
    } else {
      visible = 0;
    }

    visibleCount = visible;
    changeVisibility();
  }

  window.addEventListener('resize', handleResize);

  handleResize();

