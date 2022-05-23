import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model({ id }) {
    let meeting = this.get('store').findRecord('meeting', id)

    return EmberObject.create({
      meeting,
      report: {
        reportDate: '',
        bookRating: null,
        reportURL: '',
        slidesURL: '',
        review: '',
        meeting
      }
    });
  },
});
