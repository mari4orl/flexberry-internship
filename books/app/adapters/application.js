import DS from 'ember-data';
import ENV from 'books/config/environment';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,
  session: service(),

  headers: computed(function() {
    let resultHeaders = {
      'Content-Type': 'application/json'
    };

    if (this.get('session.isAuthenticated')) {
      resultHeaders['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return resultHeaders;
  }).volatile(),

  // init() {
  //   this._super(...arguments);
  //   this.set('headers', {
  //     'Content-Type': 'application/json'
  //   });
  // },

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments);
    if (modelName === 'speaker' && requestType === 'findRecord' && id) {
      url += '?_embed=reports';
    }

    if (modelName === 'book' && requestType === 'findRecord' && id) {
      url += '?_embed=reports';
    }

    if (modelName === 'meeting' && requestType === 'findAll') {
      url += '?_embed=reports'
    }

    return url;
  },

  handleResponse(status, headers, payload) {
    const meta = {
      total: headers['x-total-count'],
    };

    payload.meta = meta;

    return this._super(status, headers, payload);
  }
});
