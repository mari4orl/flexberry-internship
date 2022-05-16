import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async saveBook(book) {
      // const uploadData = get(this, 'uploadData');
      let bookModel = this.get('model');
      bookModel.set('title', book.title);
      bookModel.set('author', book.author);
      bookModel.set('pages', book.pages);
      bookModel.set('coverURL', book.coverURL);
      bookModel.set('descriptionURL', book.descriptionURL);
      bookModel.set('tags', book.tags);

      await bookModel.save();

      this.transitionToRoute('books.index');
    }
  }
});
