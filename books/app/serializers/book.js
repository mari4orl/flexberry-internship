import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    reports: {
      serialize: false,
      deserialize: 'records'
    }
  },

  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  }
});
