import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('string'),
  coverURL: DS.attr('string'),
  descriptionURL: DS.attr('string'),
  tags: DS.attr(),

  // speaker: DS.hasMany('speaker')
});
