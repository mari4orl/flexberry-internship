import Component from '@ember/component';

export default Component.extend({
  actions: {
    saveMeeting(e) {
      e.preventDefault();

      this.onsubmit({
        meetingDate:  this.get('meetingDate')
      });
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      meetingDate:  this.get('meeting.meetingDate')
    });
  }
});
