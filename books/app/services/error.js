import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  async saveError(error) {
    console.log(`Logger: ${error}`);

    let newError = this.get('store').createRecord('error',
    {
      date: 'date',
      ip: 'ip',
      url: 'something',
      message: 'error message'
    });

    await newError.save();
  }
});
