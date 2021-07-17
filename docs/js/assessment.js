var app = new Vue({
  el: '#form',
  data: {
    page: 1,
  },
  methods: {
    next() {
      console.log('next');
      if(this.page < 4) {
        scroller(0, () => {
          this.page++;
        });        

      } else {
        this.submit();
      }
    },
    back() {
      console.log('back');
      this.page--;
      window.scrollTo(0, 0);
    },
    submit() {
      console.log('submit');
    }
  }
});