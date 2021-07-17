var app = new Vue({
  el: '#form',
  data: {
    page: 1,
  },
  methods: {
    next() {
      scroller(0, () => {
        this.page++;
      });        

      if(this.page === 5) {
        this.submit();
      }
    },
    back() {
      this.page--;
      window.scrollTo(0, 0);
    },
    submit() {
      console.log('submit');
    }
  },
  computed: {
    headerText() {
      return this.page < 5
        ? 'Help us understand you + your needs'
        : 'Thanks!';
    },
    subHeaderText() {
      return this.page < 5
        ? '(don\'t worry, this won\'t take long)'
        : 'You will hear from us soon.';
    }
  }
});