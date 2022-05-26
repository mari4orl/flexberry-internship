import Route from '@ember/routing/route';
// import { Promise } from 'rsvp';
// import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: {
      refreshModel: true
    },
    searchByTag: {
      refreshModel: true
    }
  },

  model({ search, searchByTag }) {

    if (search && !searchByTag) {
      return this.get('store').query('book', { q: search });
    } else if (search && searchByTag) {
      return this.get('store').query('book', {
        q: search,
        tags_like: searchByTag
      });
    } else if (searchByTag && !search){
      return this.get('store').query('book', { tags_like: searchByTag });
    }

    return this.get('store').findAll('book');
  },

  setupController(controller) {
    this._super(...arguments);
    if (this.get('modelPromise')) {
      controller.set('isLoading', true);
    }
    set(controller, 'tags', []);
    set(controller, 'uploadData', null);
  },

  actions: {
    // refreshRoute() {
      // this.refresh();
    // },
    loading() {
      return false;
    }
  }
});
