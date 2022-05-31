import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  coverURL: DS.attr('string'),
  descriptionURL: DS.attr('string'),
  tags: DS.attr(),
  rating: DS.attr('number'),

  reports: DS.hasMany('report'),
  user: DS.belongsTo('user')
});
