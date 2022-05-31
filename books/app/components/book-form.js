import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },

    submitForm(e) {
      e.preventDefault();

      this.onsubmit({
        id:  this.get('idBook'),
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        coverURL: this.get('coverURL'),
        descriptionURL: this.get('descriptionURL'),
        tags: this.get('tags')
      });
    },

    changeUploadData(uploadData) {
      this.get('uploadDataChanged')(uploadData);
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      idBook:  this.get('book.id') ? this.get('book.id') : undefined,
      title: this.get('book.title'),
      author: this.get('book.author'),
      pages: this.get('book.pages'),
      coverURL: this.get('book.coverURL'),
      descriptionURL: this.get('book.descriptionURL'),
      tags: this.get('book.tags')
    });
  }
});
