var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,          // Exibe 4 slides ao mesmo tempo
    spaceBetween: 20,          // Espaço entre os slides
    slidesPerGroup: 4,         // Avança 4 slides por vez ao clicar nas setas
    loop: false,               // Desabilita o loop
    centeredSlides: true,      // Centraliza o slide ativo
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',  // Define onde as bolinhas serão exibidas
      clickable: true,           // Permite clicar nas bolinhas para navegar
    },
    breakpoints: {
      300: {
        slidesPerView: 1,        // Exibe 1 slide para telas pequenas
        slidesPerGroup: 1,       // Avança 1 slide por vez
        centeredSlides: true,    // Garante que o único slide seja centralizado
      },
      640: {
        slidesPerView: 2,        
        slidesPerGroup: 2,      
        centeredSlides: false,  
      },
      768: {
        slidesPerView: 3,       
        slidesPerGroup: 3,       
        centeredSlides: false,  
      },
      1024: {
        slidesPerView: 4,       
        slidesPerGroup: 4,      
        centeredSlides: false,  
      },
    },
  });
  