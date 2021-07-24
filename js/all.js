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
      document.body.classList.toggle('freeze', this.isOpen);
    }
  },
  mounted() {

    /* --- transitions --- */
    setTimeout(() => {
      document.body.classList.remove('preload');
    }, 200);

    /* --- sticky nav --- */
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

    /* --- slide menu --- */
    let mm = matchMedia('(min-width: 990px)');

    mm.addEventListener('change', () => {
      if(mm.matches) {
        this.isOpen = false;
        document.body.classList.remove('freeze');
      }
    });
  }
})