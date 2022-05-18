import Controller from '@ember/controller';

export default Controller.extend({
  // queryParams: ['search', 'searchByTag'],
  // search: '',
  // searchByTag: '',
  actions: {
    searchBooks(search) {
      this.queryParams = search;
      search = '';
    },
    async deleteBook(book) {
      try {
        await book.destroyRecord('book');

        // this.send('refreshRoute');
      }
      catch(e) {
        // this.send('error', new Error('Connection failed'));
      }
    }
  }
});
