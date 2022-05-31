import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  session: service(),
  currentUser: service(),
  actions: {
    async deleteSpeaker(speaker) {
      await speaker.destroyRecord();
      // this.send('refreshRoute');
    },

    searchSpeaker(e) {
      e.preventDefault();
      this.set("search", this.get("searchSpeaker"));
    }
  }
});
