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
        hint: 'We really do need your name, please! :)'
      },
      email: {
        value: '',
        required: true,
        hint: 'Please enter a valid email!',
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

      // page 5 has no fields (it's the Thank You page)
    }
  },
  methods: {
    next() {
      scroller(0, () => {
        if(this.page < 4) {
          this.page++;
        } else {
          this.submitGeneral(this.success, this.failure);
        }
      });
    },
    back() {
      this.page--;
    },
    success() {
      console.log('assessment success');
      this.page = this.lastPage;
    },
    failure() {
      console.log('assessment failure');
    },
    seeChange(e) {
      console.log('seeChange');
      console.log(e);
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