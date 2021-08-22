
var app = new Vue({
    el: '#form',
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
      success() {
        console.log('cb success!');
      },
      failure() {
        console.log('cb failure!');
      }
    },
  });