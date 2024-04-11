function initSplide() {
  const className = '.class-name';
  const splideEl = document.querySelector(className);

  if (splideEl) {
      const splide = new Splide(className, {
        perPage: 7,
        rewind : true,
        arrows: false,
        pagination: false,
        breakpoints: {
            1023: {
              perPage: 5,
            },
            600: {
              perPage: 3,
            },
        },
      });
      splide.mount();
  }
}

function setCurrentYear() {
  var currentYearElement = document.querySelector('.current-year');
  if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
  }
}

function initMenuToggle() {
  document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.body.classList.toggle('menu-open');

      if (document.body.classList.contains('menu-open')) {
          document.querySelectorAll('nav a').forEach(function(link) {
              link.addEventListener('click', function() {
                  setTimeout(function() {
                      document.body.classList.remove('menu-open');
                  }, 750);
              });
          });
      }
  });

  window.matchMedia('(min-width: 1024px)').addListener(function(e) {
      if (e.matches) {
          document.body.classList.remove('menu-open');
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initSplide();
  setCurrentYear();
  initMenuToggle();
});