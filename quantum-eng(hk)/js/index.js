// Round logo
const letter = document.querySelectorAll('.letter');
for (let i = 0; i < letter.length; i++) {
  letter[i].style.transform = `rotate(${i * 5.4}deg)`;
}

// Decreased counter
$(() => {
  let timerIdPackCountNumber = 17;
  $('.pack_count').html(timerIdPackCountNumber);

  setTimeout(function tick() {
    timerIdPackCountNumber--;
    $('.pack_count').html(timerIdPackCountNumber);
    if (timerIdPackCountNumber > 5) {
      setTimeout(tick, 60000);
    }
  }, 0);
});

// Neron net
const initParticles = () => {
  Particles.init({
    selector: '.background',
  });

  Particles.init({
    selector: '.background',
    color: ['#00FAAA', '#f70044'],
    connectParticles: true,
    maxParticles: 90,
    speed: 0.7,
    responsive: [{
      breakpoint: 600,
      options: {
        maxParticles: 15,
        connectParticles: true,
        speed: 0.2,
      },
    }],
  });
};

// Preloader
const preloader = document.getElementById('preloader');

const hidePreloader = () => {
  preloader.style.display = 'none';
};

window.addEventListener('load', () => {
  initParticles();
  hidePreloader();
});

// Video popup
const videoTrigger = document.querySelector('.promo__right');
const video = document.querySelector('.video-popup');
const closeButton = document.querySelector('.close-button');
const body = document.querySelector('body');

videoTrigger.addEventListener('click', () => {
  video.classList.add('video-popup-show');
  body.classList.add('video-opened');
});

closeButton.addEventListener('click', () => {
  video.classList.remove('video-popup-show');
  body.classList.remove('video-opened');
});

// Scroll to element
const scrollToElement = (elSelector, triggerSelector) => {
  const el = document.querySelector(elSelector);
  const triggers = document.querySelectorAll(triggerSelector);

  const callback = (item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  triggers.forEach(callback);
};

scrollToElement('#form', 'a[href="#form"]');
