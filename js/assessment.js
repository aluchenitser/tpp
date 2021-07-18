var app = new Vue({
  el: '#form',
  data: {
    page: 1,
    lastPage: 5,
  },
  methods: {
    next() {
      scroller(0, () => {
        this.page++;
      });

      if(this.page === this.lastPage) {
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
      return this.page < this.lastPage
        ? 'Help us understand you + your needs'
        : 'Thanks!';
    },
    subHeaderText() {
      return this.page < this.lastPage
        ? '(don\'t worry, this won\'t take long)'
        : 'You will hear from us soon.';
    }
  }
});