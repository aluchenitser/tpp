var app = new Vue({
  el: '#vue-assessment-page',
  mixins: [validatorMixin],
  data: {
    page: 1,
    lastPage: 5,
    isLoading: false,

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
      contactAdditional: {
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
      if(this.page < 4) {
          scroller(0, () => {
            this.page++;
          });
        } else {
          this.submitGeneral(this.success, this.failure);
        }
    },
    back() {
      this.page--;
    },
    async success() {
      console.log('assessment success');
      this.isLoading = true;
      let response = {};

      // try {
      //   response = await fetch('https://xc03285k6c.execute-api.us-east-1.amazonaws.com/contactPage', {
      //     method: 'POST',
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(this.payload),
      //   });

      // } catch(e) {
      //   console.log('send failed', e);
      // }

      setTimeout(() => {
        this.isLoading = false;
        scroller(0, () => {
          // this.page = this.lastPage;
        })
      }, 2000);
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