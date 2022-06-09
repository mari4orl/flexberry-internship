import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  ip: DS.attr('string'),
  url: DS.attr('string'),
  message: DS.attr('string'),
});
