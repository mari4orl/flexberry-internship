import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search', 'searchByTag'],
  search: '',
  searchByTag: '',
  dataService: service('data'),
  actions: {
    searchBook(e) {
      e.preventDefault();
      this.set("search", this.get("searchBook"));
    },

    searchBookByTag(e) {
      e.preventDefault();
      this.set("searchByTag", this.get("searchBookByTag"));
    },

    async deleteBook(book) {
      try {
        await this.get('dataService').deleteBook(book);
        this.send('refreshRoute');
      }
      catch(e) {
        this.send('error', new Error('Connection failed'));
      }
    }
  }
});
