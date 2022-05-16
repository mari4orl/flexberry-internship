import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model() {
    // let promise = new Promise((resolve, reject) => {
    //   later(async () => {
    //     try {
    //       let speakers = search ? await this.get('dataService').getSpeakers(search) : this.get('dataService').getSpeakers();
    //       resolve(speakers);
    //     }
    //     catch (e) {
    //       reject('Connection failed')
    //     }
    //   }, 1000);
    // }).
    // then((speakers) => {
    //   this.set('controller.model', speakers);
    // }).
    // finally(() => {
    //   if (promise === this.get('modelPromise')) {
    //     this.set('controller.isLoading', false);
    //   }
    // });

    // this.set('modelPromise', promise);
    // return { isLoading: true };
    return this.get('store').findAll('speaker');
  },

  setupController(controller) {
    this._super(...arguments);
    if (this.get('modelPromise')) {
      controller.set('isLoading', true);
    }
  },

  actions: {
    // refreshRoute() {
    //   this.refresh();
    // },
    loading() {
      return false;
    }
  }
});
