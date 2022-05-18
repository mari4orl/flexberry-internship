import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await speaker.destroyRecord();
        // this.send('refreshRoute');
      }
      catch(e) {
        // this.send('error', new Error('Connection failed'));
      }
    }
  }
});
