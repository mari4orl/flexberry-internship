import Component from '@ember/component';

export default Component.extend({
  actions: {
    async saveUser(e) {
      e.preventDefault();

      this.get('onSubmit')({
        email: this.email,
        password: this.password,
        username: this.username
      });
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
