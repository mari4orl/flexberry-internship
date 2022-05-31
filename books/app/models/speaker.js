import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  patronymic: DS.attr('string'),
  surname: DS.attr('string'),

  reports: DS.hasMany('report'),
  user: DS.belongsTo('user'),

  fullName: computed('name', 'surname', function() {
    return `${this.get('surname')} ${this.get('name')}`;
  }),
});
