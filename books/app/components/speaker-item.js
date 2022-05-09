import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteSpeaker(speaker) {
      this.get('deleteSpeaker')(speaker);
    }
  }
});
