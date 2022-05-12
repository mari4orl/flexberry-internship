import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBook(book) {
      // try {

        let newBook = this.get('store').createRecord('book', book);
        await newBook.save();

        this.transitionToRoute('books.index');
      // }
      // catch(e){
      //   this.send('error', new Error('Connection failed'));
      // }
    },

    changeUploadData(uploadData) {
      // set(this, 'uploadData', uploadData);
    }
  },
});
