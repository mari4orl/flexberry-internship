import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search', 'tag_like'],
  search: '',
  tag_like: '',
  dataService: service('data'),
  actions: {
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
