import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveSpeaker(speaker) {
      // await this.get('dataService').createSpeaker(speaker);
      // this.get('model').set('name', speaker.name);
      // this.get('model').set('surname', speaker.surname);
      // this.get('model').set('patronymic', speaker.patronymic);
      // this.get('model').set('coverURL', speaker.coverURL);
      let newSpeaker = this.get('store').createRecord('speaker', speaker);
      await newSpeaker.save();

      this.transitionToRoute('speakers');
    }
  }
});
