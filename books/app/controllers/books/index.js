import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search', 'searchByTag'],
  search: '',
  searchByTag: '',
  session: service(),
  currentUser: service(),
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
        await book.destroyRecord();

        // this.send('refreshRoute');
      }
      catch(e) {
        // this.send('error', new Error('Connection failed'));
      }
    }
  }
});
