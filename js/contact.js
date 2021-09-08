
var app = new Vue({
    el: '#vue-contact-page',
    mixins: [validatorMixin],
    data: {
      isSuccess: false,

      // uses validator
      fields: {
        name: {
          value: '',
          required: true,
          hint: 'Please enter a name!',
        },
        email: {
          value: '',
          required: true,
          hint: 'Please enter a valid email!',
          type: 'email',
        },
        phone: {
          value: '',
          hint: 'Please enter a valid phone number!',
          type: 'phone',
        },
        message: {
          value: '',
          required: true,
          hint: 'Anything you\'d like to tell us?',
        },
      }
    },
    methods: {
      async success() {
        let response = {};
        if (this.isSuccess) { return; }

        try {
          response = await fetch('https://xc03285k6c.execute-api.us-east-1.amazonaws.com/contactPage', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.payload),
          });

        } catch(e) {
          console.log('send failed', e);
        }

        this.successUI();
      },
      successUI() {
        document.querySelectorAll('input, textarea')
          .forEach((control) => control.setAttribute('readonly', 'true'));

        const scrollLocation = this.$refs.quote.getBoundingClientRect().top + window.scrollY + 30;

        scroller(scrollLocation, () => {
          this.isSuccess = true;
        });
      },
      failure() {
        console.log('cb failure!');
      }
    },
    computed: {
      payload() {
        let payload = {};

        Object.keys(this.fields).map((element) => {
          payload[element] = this.fields[element].value;
        });

        return payload;
      },
      headerText() {
        return this.isSuccess
          ? 'Thanks!'
          : 'Contact Us';
      },
      subHeaderText() {
        return this.isSuccess
          ? 'You will hear from us soon.'
          : 'Have a project in mind or looking for a job? Fill out the form below!';
      }
    }
  });