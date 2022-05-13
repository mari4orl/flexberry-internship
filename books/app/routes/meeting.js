import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model() {
    // return this.get('store').findAll('meeting');
  },

  actions: {
    loading() {
      return false;
    }
  }
});
