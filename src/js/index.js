const splideEvents = new Splide( '.tech-icons', {
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
splideEvents.mount();


document.addEventListener('DOMContentLoaded', function() {
    var currentYearElement = document.querySelector('.current-year');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
});


document.querySelectorAll('.team-card .show-bio').forEach(function(button) {
    button.addEventListener('click', function() {
      const teamCard = this.closest('.team-card');
      const span = this.querySelector('span');
  
      if (teamCard.classList.contains('bio-show')) {
        teamCard.classList.remove('bio-show');
        span.textContent = 'Show More';
      } else {
        teamCard.classList.add('bio-show');
        span.textContent = 'Show Less';
      }
    });
});


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