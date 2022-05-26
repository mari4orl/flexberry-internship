import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['search', 'searchByTag'],
  search: '',
  searchByTag: '',
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
