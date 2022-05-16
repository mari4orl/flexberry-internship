import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBook(book) {
      // try {
        const uploadData = get(this, 'uploadData');
        await this.get('dataService').createBook(book, uploadData);
        this.get('model').set('title', book.title);
        this.get('model').set('author', book.author);
        this.get('model').set('pages', book.pages);
        this.get('model').set('coverURL', book.coverURL);
        this.get('model').set('descriptionURL', book.descriptionURL);
        this.get('model').set('tags', book.tags);

        this.transitionToRoute('books.index');
      // }
      // catch(e){
      //   this.send('error', new Error('Connection failed'));
      // }
    },

  },
});
