// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#main-navbar').style.opacity = 0.95;
    } else {
      document.querySelector('#main-navbar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 60
        },
        800
      );
    }
  });