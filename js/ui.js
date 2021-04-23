const stickyElement = document.querySelector('.sticky');

window.addEventListener("scroll", e => {
  const isStuck = stickyElement.classList.contains('stuck');

  if(window.pageYOffset > 10 && !isStuck) {
    stickyElement.classList.add('stuck')
  } else if (window.pageYOffset <= 10 && isStuck) {
    stickyElement.classList.remove('stuck')
  }
})