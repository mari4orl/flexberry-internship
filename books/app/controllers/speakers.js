import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';

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

    inputHandler() {
      debounce(() => {
        // this.searchSpeaker(event);

        this.set("search", this.get("searchSpeaker"));
      }, 2000);
    }
  },

  // searchSpeaker(e) {
  //   // e.preventDefault();
  //   // this.set("search", this.get("searchSpeaker"));
  // }
});
