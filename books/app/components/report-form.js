import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        id:  this.get('idReport'),
        bookRating: this.get('bookRating'),
        reportURL: this.get('reportURL'),
        slidesURL: this.get('slidesURL'),
        review: this.get('review'),
        bookId:  this.get('bookId'),
        meetingId:  this.get('meetingId'),
        speakerId:  this.get('speakerId')
      });
    }
  },
  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      idReport:  this.get('report.id') ? this.get('report.id') : undefined,
      bookRating: this.get('report.bookRating'),
      reportURL: this.get('report.reportURL'),
      slidesURL: this.get('report.slidesURL'),
      review: this.get('report.review'),
      bookId:  this.get('bookId'),
      meetingId:  this.get('meetingId'),
      speakerId:  this.get('speakerId')
    });
  }
});
