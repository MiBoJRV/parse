window.addEventListener('scroll', () => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

const number1 = document.querySelector('#number1');
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

number1.setAttribute('data-target', getRndInteger(512, 917));

const number2 = document.querySelector('#number2');

number2.setAttribute('data-target', getRndInteger(109, 151));

const number3 = document.querySelector('#number3');

number3.setAttribute('data-target', getRndInteger(3, 6));

// Получаем нужный элемент
const element = document.querySelectorAll('.dynamic-accent');

const Visible = (target) => {
  // Все позиции элемента
  for (let i = 0; i < element.length; i++) {
    const targetPosition = {
      top: window.pageYOffset + target[i].getBoundingClientRect().top,
      bottom: window.pageYOffset + target[i].getBoundingClientRect().bottom,
    };
    // Получаем позиции окна
    const windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };
    // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    if (targetPosition.bottom > windowPosition.top
    // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    && targetPosition.top < windowPosition.bottom
    ) {
    // Если элемент полностью видно, то запускаем следующий код
      element[i].classList.add('dynamic-accent-active');
      if (element[i].classList.contains('counter')) {
        const counters = document.querySelectorAll('.counter');

        counters.forEach((counter) => {
          // counter.innerHTML = "0";

          const updateCounter = () => {
            const targetCount = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            if (c < targetCount) {
              counter.innerText = c + 1;
              setTimeout(updateCounter, 1);
            } else {
              counter.innerText = targetCount;
            }
          };
          updateCounter();
        });
      }
    }
  }
};

window.addEventListener('scroll', () => {
  Visible(element);
});

// Запускаем функцию при прокрутке страницы

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(element);
