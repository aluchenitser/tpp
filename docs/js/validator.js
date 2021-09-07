function isValidEmail(email) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(email);
}

function isValidPhone(phone) {
  const pattern = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return pattern.test(phone);
}

const validatorMixin = {
  data() {
    return {
      firstSubmit: false, // hasn't had a submit attmep
    };
  },
  methods: {
    submitForm(e, successCB, failureCB) {
      // this.consoleAllFields(); // debug
      const form = e.target;

      this.validateAll();
      this.firstSubmit = true;

      // valid form with custom finale
      if (this.isFormValid && successCB) {
        successCB();

      // valid form with standard finale
      } else if (this.isFormValid) {
        form.submit();
      } else if (failureCB) {
        failureCB();
      }
    },
    submitGeneral(successCB, failureCB) {
      if(!successCB && !failureCB) {
        console.error('submitGeneral needs both callbacks as arguments');
        return false;
      }

      this.validateAll();

      this.firstSubmit = true;

      if(this.isFormValid) {
        successCB();
      } else {
        failureCB();
      }
    },
    formChangeEvents(e) { // once submit has failed, this will validate per field
      const field = this.fields[e.target.name];

      if (field && field.isValid === false) {
        this.validateField(field);
      }
    },
    formInputEvents(e, fieldsArg) { // per keypress validation
      fieldsArg.forEach((name) => {
        const field = this.fields[name];
        if (field
          && fieldsArg.indexOf(e.target.name) !== -1
          && field.value) {
          this.validateField(field, this.notYetSubmitted ? 'noMatchCheck' : undefined);
        }
      });
    },
    validateAll() {
      const fieldKeys = Object.keys(this.fields);
      const noOmit = !this.fieldsOmit || this.fieldsOmit.length === 0;

      fieldKeys.forEach((key) => {
        if (noOmit || this.fieldsOmit.includes(key.toString()) === false) {
          this.validateField(this.fields[key]);
        }
      });
    },
    validateClearAll() {
      Object.keys(this.fields).forEach((key) => {
        this.fields[key].isValid = true;
      });
    },
    validateField(item, noMatchCheck) {
      let isValid = true;
      const field = item;

      if (field.value === undefined) field.value = '';

      if (field.required && (field.value.length === 0 || field.value === false)) {
        isValid = false;
      }

      if (field.value.length > 0 && field.type === 'email' && isValidEmail(field.value) === false) {
        isValid = false;
      }
      if (field.value.length > 0 && field.type === 'phone' && isValidPhone(field.value) === false) {
        isValid = false;
      }

      field.isValid = isValid;
      // this.consoleField(field); // for debug
    },
    // for debug
    consoleField(field) {
      if (!field.isValid) {
        console.log('isValid', field.isValid);
        console.log(field);
      }
      // console.log('isStrong', field.isStrong);
      // console.log('isMatch', field.isMatch);
    },
    consoleAllFields() {
      console.log('consoleAllFields');
      console.log(this.fields);

      Object.keys(this.fields).forEach((fieldName) => {
        this.consoleField(this.fields[fieldName]);
      });
    },
  },
  computed: {
    isFormValid() {
      return Object.keys(this.fields)
        .every((key) => this.fields[key].isValid);
    },
  },
  created() {
    Object.keys(this.fields).forEach((key) => {
      if (this.fields[key].isValid === undefined) {
        this.$set(this.fields[key], 'isValid', true);
      }
    });
  },
};
