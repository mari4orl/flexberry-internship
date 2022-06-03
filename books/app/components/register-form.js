import Component from '@ember/component';
import { validator, buildValidations } from 'ember-cp-validations';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { later } from '@ember/runloop';

const Validations = buildValidations({
  username: [
    validator('ds-error'),
    validator('presence', true),
  ],
  email: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  password: [
    validator('ds-error'),
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ]
});

export default Component.extend(Validations, {
  i18n: service(),
  isFormValid: computed.alias('validations.isValid'),
  showError: false,
  actions: {
    async saveUser(e) {
      e.preventDefault();
      if (this.get('isFormValid')) {
        this.set('showError', false)
        this.get('onSubmit')({
          showError: false,
          email: this.email,
          password: this.password,
          username: this.username
        });
      } else {
        this.set('showError', true),
        later(() => {
          this.set('showError', false)
        }, 2000)
      }
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password'),
      username: this.get('user.username')
    });
  }
});
