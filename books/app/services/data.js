import Service from '@ember/service';
import ENV from 'books/config/environment';

export default Service.extend({
  getBooks() {
    return fetch(`${ENV.backendURL}/books`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  }
});
