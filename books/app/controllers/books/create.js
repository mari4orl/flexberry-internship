import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('title', '');
    this.get('book').set('author', '');
    this.get('book').set('pages', '');
    this.get('book').set('coverURL', '');
    this.get('book').set('descriptionURL', '');
    this.get('book').set('tags', '');
  },

  dataService: service('data'),
  actions: {
    async saveBook(book) {
      // try {
        await this.get('dataService').createBook(book);

        this.transitionToRoute('books.index');
      // }
      // catch(e){
      //   this.send('error', new Error('Connection failed'));
      // }
    }
  }
});
