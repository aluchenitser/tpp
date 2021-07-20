var app = new Vue({
  el: '#main-nav',
  data() {
    return {
      isOpen: false,
      isStuck: false,
    };
  },
  methods: {
    slide() {
      this.isOpen = !this.isOpen;

      this.isOpen
        ? document.body.classList.add('freeze')
        : document.body.classList.remove('freeze')
    }
  },
  mounted() {
    const vm = this;
    const bookEl = document.querySelector('.book-end');
    const bookRect = bookEl.getBoundingClientRect();


    // prevents initial fire of transitions
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

    // sticky header box-shadow

    function sticky() {
      // console.log(bookRect.top, bookEl.getBoundingClientRect().top);
      vm.isStuck = window.scrollY > 8;
    }

    window.addEventListener('scroll', sticky);
  }
})