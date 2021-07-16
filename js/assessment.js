var app = new Vue({
    el: '#form',
    data: {
      page: 1,
    },
    methods: {
      next() {
          this.page++;
      }
    }
  });