import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  dataService: service('data'),
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await this.get('dataService').deleteSpeaker(speaker);
        this.send('refreshRoute');
      }
      catch(e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});
