import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveBook(book) {
      const uploadData = get(this, 'uploadData');

      await this.get('dataService').updateBook(book, uploadData);

      this.transitionToRoute('books.index');
    }
  }
});
