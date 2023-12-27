let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  // slidesPerView: 1.2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




document.addEventListener('DOMContentLoaded', function () {

  let cards = Array.from(document.querySelectorAll('.brand-card'));
  let button = document.querySelector('.brand-list__button');
  let initialVisibleCount = 6; 
  let isAllCardsVisible = false;

  button.addEventListener('click', ()=>{
    if( button.classList.contains('button-show')){
     button.classList.add('button-hide');
     button.classList.remove('button-show')
     button.textContent = 'Скрыть'
    } else{
     button.classList.add('button-show');
     button.classList.remove('button-hide');
     button.textContent = 'Показать ещё'
    };
     
   })

  button.addEventListener('click', () => {
    isAllCardsVisible = !isAllCardsVisible;
    updateCardVisibility();
  });

  function updateCardVisibility() {
    if (window.innerWidth < 768) {
      cards.forEach(card => card.classList.add('hidden'));
      button.classList.add('hidden');
      return;
    }
    cards.forEach((card, index) => {
      if (isAllCardsVisible || index < initialVisibleCount) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    if (isAllCardsVisible) {
      button.textContent = 'Скрыть';
    } else {
      button.textContent = 'Показать ещё';
    }
    button.classList.toggle('hidden', !isAllCardsVisible && cards.length <= initialVisibleCount);
  
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

    initialVisibleCount = visible;
    updateCardVisibility();
  }

  window.addEventListener('resize', handleResize);

  handleResize();
});
