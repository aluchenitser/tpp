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
      console.log('slide');
    }
  }
})