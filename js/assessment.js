var app = new Vue({
  el: '#vue-assessment-page',
  mixins: [validatorMixin],
  data: {
    page: 1,
    lastPage: 5,

    fields: {
      // page 1
      typeOfBusiness: {
        value: '',
      },
      ownMarketing: {
        value: '',
      },
      typicalCustomer: {
        value: '',
      },

      // page 2
      geographicArea: {
        name: ''
      },
      isExpanding: {
        value: ''
      },
      existingAd: {
        value: ''
      },
      existingSocial: {
        value: ''
      },

      // page 3
      exactService: {
        value: ''
      },
      currentPerception: {
        value: ''
      },
      futurePerception: {
        value: ''
      },

      // page 4
      name: {
        value: '',
        required: true,
        hint: 'We really do need your name please. :)'
      },
      email: {
        value: '',
        required: true,
        hint: 'Please enter an email!',
        type: 'email',
      },
      contactPreference: {
        value: ''
      },
      contactText: {
        value: ''
      },
      anythingElse: {
        value: ''
      },
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
      console.log('assessment success');
    },
    failure() {
      console.log('assessment failure');
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