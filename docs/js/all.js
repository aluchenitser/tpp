var app = new Vue({
  el: '#main-nav',
  data() {
    return {
      isOpen: false,
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
    // prevents initial fire of transitions
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
  }
})