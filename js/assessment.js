const fields = {
  "What type of business are you in": null,
  "Have you attempted any marketing of your own? How did it go?": null,
}

var app = new Vue({
  el: '#form',
  data: {
    page: 1,
    lastPage: 5,

    fields: {
      // page 1
      typeOfBusiness: '',
      ownMarketing: '',
      typicalCustomer: '',

      // page 2
      geographicArea: '',
      isExpanding: '',
      existingAd: '',
      existingSocial: '',

      // page 3
      exactService: '',
      currentPerception: '',
      futurePerception: '',

      // page 4
      contactPreference: '',
      contactText: '',
      anythingElse: '',
    }
  },
  methods: {
    next() {
      scroller(0, () => {
        this.page++;
      });

      if(this.page === this.lastPage) {
        this.submitGeneral(this.success, this.failure);
      }
    },
    back() {
      this.page--;
    },
    success() {
      console.log('success');
    },
    failure() {
      console.log('failure');
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