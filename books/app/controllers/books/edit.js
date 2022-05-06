import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveBook(book) {
      await this.get('dataService').updateBook(book);

      this.transitionToRoute('books.index');
    }
  }
});
