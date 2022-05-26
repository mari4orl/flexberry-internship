import Controller from '@ember/controller';
import { computed } from '@ember/object';

export const PER_PAGE = 2;

export default Controller.extend({
  queryParams: ['search', 'page', 'report', 'speaker', 'book'],
  page: 1,
  search: '',
  speaker: '',
  books: '',
  report: '',

  pages: computed('model.meetings.meta.total', function() {
    const total = Number(this.get('model.meetings.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  selectedSpeaker: computed('speaker', function() {
    const speaker = this.get('speaker');

    return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
  }),

  selectedBook: computed('book', function() {
    const book = this.get('book');

    return book ? this.get('model.books').findBy('id', book) : null;
  }),

  actions: {
    changeSpeaker(speaker) {
      this.set('speaker', speaker ? speaker.get('id') : '');
    },
    changeBook(book) {
      this.set('book', book ? book.get('id') : '');
    }
  }
});
