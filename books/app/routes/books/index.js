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

  model() {
    // let promise = new Promise((resolve, reject) => {
    //   later(async () => {
    //     try {
    //       let books = search ? await this.get('dataService').getBooks(search) : this.get('dataService').getBooks();
    //       resolve(books);
    //     }
    //     catch (e) {
    //       reject('Connection failed')
    //     }
    //   }, 1000);
    // }).
    // then((books) => {
    //   this.set('controller.model', books);
    // }).
    // finally(() => {
    //   if (promise === this.get('modelPromise')) {
    //     this.set('controller.isLoading', false);
    //   }
    // });

    // this.set('modelPromise', promise);
    // return { isLoading: true };
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
