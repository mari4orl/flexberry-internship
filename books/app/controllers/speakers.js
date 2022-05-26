import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['search'],
  search: '',
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
