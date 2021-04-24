const stickyElement = document.querySelector('.sticky');

window.addEventListener("scroll", e => {
  const isStuck = stickyElement.classList.contains('stuck');

  if(window.pageYOffset > 10 && !isStuck) {
    stickyElement.classList.add('stuck')
  } else if (window.pageYOffset <= 10 && isStuck) {
    stickyElement.classList.remove('stuck')
  }
})

document.getElementById('menu-toggle').addEventListener('change', e => {
  document.body.classList.toggle('mobile-menu-open', e.target.checked);
  console.log('menu toggle?');
})