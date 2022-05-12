import Component from '@ember/component';

export default Component.extend({
  actions: {
    deleteBook(book) {
      this.get('deleteBook')(book);
    }
  }
});
