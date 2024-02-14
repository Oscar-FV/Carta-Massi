document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.valentines-day').addEventListener('click', function() {
    // Animación de desvanecimiento de los elementos del sobre
    var envelope = document.querySelector('.envelope');
    envelope.style.animation = 'fall 3s linear 1';
    envelope.style.webkitAnimation = 'fall 3s linear 1';
    
    setTimeout(function() {
      envelope.style.display = 'none';
      
      // Ocultar elementos dentro de .valentines-day
      var elementsToHide = document.querySelectorAll('.valentines-day .heart, .valentines-day .text, .valentines-day .front');
      elementsToHide.forEach(function(element) {
        element.style.display = 'none';
      });

      // Hacer visible la carta con una animación ondulante
      var card = document.getElementById('card');
      var cardHeart = document.getElementById('heart-2');
      card.style.visibility = 'visible';
      card.style.opacity = 0;
      card.style.transform = 'scale(0.1)';

      cardHeart.style.transform = 'scale(3) rotate(-45deg)';

      var startTime = null;
      function animateCard(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        card.style.opacity = progress / 1000; // Duración de la animación: 1000 ms

        var scale = 1 + Math.sin(progress * Math.PI / 500) * 0.2;
        card.style.transform = 'scale(' + scale + ')';

        if (progress < 1000) {
          requestAnimationFrame(animateCard);
        }
      }

      requestAnimationFrame(animateCard);
    }, 500);
  });
});