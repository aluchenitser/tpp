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

    // prevents initial fire of transitions
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

    // sticky nav shrink
    const el = this.$refs.mainNav;
    if(!el) return;

    const observer = new IntersectionObserver((entries, observer) => {
        console.log('intersect!')
        el.classList.toggle("stuck", entries[0].intersectionRatio < 1)
      },
      {
        root: null,
        threshold: [1],
      }
    );

    observer.observe(el);
  }
})