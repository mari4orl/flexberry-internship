import Controller from '@ember/controller';
import { computed } from '@ember/object';

export const PER_PAGE = 3;

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
      this.set('selectedSpeaker', speaker);
    },
    changeBook(book) {
      this.set('selectedBook', book);
    },

    searchMeeting(selectedBook, selectedSpeaker, dateMeeting) {
      this.set('speaker', selectedSpeaker ? selectedSpeaker.id : '');
      this.set('book', selectedBook ? selectedBook.id : '');

      this.set('dateMeeting', dateMeeting ? dateMeeting : '');
    },

    changeDateMeeting(dateMeeting) {
      this.set('dateMeeting', dateMeeting);
    }
  }
});
