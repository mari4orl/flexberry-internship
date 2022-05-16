import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async saveSpeaker(speaker) {
      let speakerModel = this.get('model');
      speakerModel.set('name', speaker.name);
      speakerModel.set('patronymic', speaker.patronymic);
      speakerModel.set('surname', speaker.surname);

      await speakerModel.save();
      this.transitionToRoute('speakers');
    }
  }
});
