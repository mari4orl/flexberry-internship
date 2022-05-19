import DS from 'ember-data';

export default DS.Model.extend({
  reportDate: DS.attr('string'),
  bookRating: DS.attr('number'),
  reportURL: DS.attr('string'),
  slidesURL: DS.attr('string'),
  review: DS.attr('string'),

  speaker: DS.belongsTo('speaker'),
  book: DS.belongsTo('book'),
  meeting: DS.belongsTo('meeting')
});
