var app = new Vue({
  el: '#top',
  data: {
    isBranding: true,
    isSocialMedia: false,
    isWeb: false,
  },
  methods: {
    selectSpecialty(specialtyVariable) {
      this.isBranding = false;
      this.isSocialMedia = false;
      this.isWeb = false;

      this[specialtyVariable] = true;
    }
  }
})