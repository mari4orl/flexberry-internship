import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  async saveError(error) {
    console.log(`Logger: ${error}`);

    let newError = this.get('store').createRecord('error',
    {
      date: new Date().toString(),
      ip: '',
      url: window.location.href,
      message: error
    });

    await newError.save();
  }
});
