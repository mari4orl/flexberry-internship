import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBook(e) {
      // try {
        e.preventDefault();

        await this.get('dataService').createBook({
          title: this.get('title'),
          author: this.get('author'),
          pages: this.get('pages'),
          coverURL: this.get('coverURL'),
          descriptionURL: this.get('descriptionURL'),
          tags: this.get('tags')
        });

        this.transitionToRoute('books.index');
      // }
      // catch(e){
      //   this.send('error', new Error('Connection failed'));
      // }
    }
  }
});
