const stickyElement = document.querySelector('.sticky');
const sayHelloEl    = document.querySelector('.say-hello');
const ctaTopEl      = document.querySelector('.cta-top');
const ctaBottomEl     = document.querySelector('.cta-bottom');

if(window.pageYOffset <= 10) {
  ctaTopEl.classList.add('at-top')
}

window.addEventListener("scroll", e => {
  const isStuck = stickyElement.classList.contains('stuck');

  const bottomOffset = 100;
  const topOffset = 10;

  if(window.pageYOffset > topOffset && !isStuck) {
    stickyElement.classList.add('stuck')
    ctaTopEl.classList.remove('at-top');
  }
  else if (window.pageYOffset <= topOffset && isStuck) {
    stickyElement.classList.remove('stuck')
    ctaTopEl.classList.add('at-top');
  }

  let isOut = ctaBottomEl.classList.contains('at-bottom');
  if(document.documentElement.offsetHeight - window.pageYOffset < window.innerHeight + bottomOffset && !isOut) {
    ctaBottomEl.classList.add('at-bottom');
  }
  else if (document.documentElement.offsetHeight - window.pageYOffset >= window.innerHeight + bottomOffset && isOut) {
    ctaBottomEl.classList.remove('at-bottom');
  }

})

document.getElementById('menu-toggle').addEventListener('change', e => {
  document.body.classList.toggle('mobile-menu-open', e.target.checked);
  console.log('menu toggle?');
})

window.onload = function() {
  document.body.classList.remove('preload')
}