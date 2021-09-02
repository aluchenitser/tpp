
var app = new Vue({
    el: '#vue-contact-page',
    mixins: [validatorMixin],
    data: {
      page: 1,
      lastPage: 5,

      fields: {
        // page 1
        name: {
          value: '',
          required: true,
          hint: 'Please enter a name!',
        },
        email: {
          value: '',
          required: true,
          hint: 'Please enter an email!',
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
        try {
          let response = await fetch('https://xc03285k6c.execute-api.us-east-1.amazonaws.com/contactPage', {
            method: 'POST',
            // mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.payload),
          });
        } catch(e) {
          console.log('send failed', e);
        }
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
      }
    }
  });