import Service from '@ember/service';
import ENV from 'books/config/environment';

export default Service.extend({
  getBooks(search, tags) {
    let queryParams = '';
    if (search && !tags) {
      queryParams = `?q=${search}`;
    } else if (search && tags) {
      queryParams = `?q=${search}&tags_like=${tags}`;
    } else if (tags && !search){
      queryParams = `?tags_like=${tags}`;
    }

    return fetch(`${ENV.backendURL}/books${queryParams}`).then((response) => response.json());
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBook(books) {
    return fetch(`${ENV.backendURL}/books/${books.id}`, { method: 'DELETE'});
  },

  // createBook(book) {
  //   return fetch(`${ENV.backendURL}/books`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(book)
  //   });
  // },

  getSpeakers(search) {
    let queryParams = '';
    if (search) {
      queryParams = `?q=${search}`;
    }

    return fetch(`${ENV.backendURL}/speakers${queryParams}`).then((response) => response.json());
  },

  getSpeaker(id) {
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  },

  deleteSpeaker(speakers) {
    return fetch(`${ENV.backendURL}/speakers/${speakers.id}`, { method: 'DELETE'});
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  async createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            // eslint-disable-next-line no-console
            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },

  updateBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      });

      const savedBook = await savedBookPromise.json();

      if (!uploadData) {
        resolve();
      }

      uploadData.url = `${ENV.fileUploadURL}`;
      // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
      uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
        try {
          const dataToUpload = {
            entityName: 'books',
            id: savedBook.id,
            fileName: result.filename
          };

          await fetch(`${ENV.backendURL}/saveURL`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToUpload)
          });

          // eslint-disable-next-line no-console
          console.log('Ok');
          resolve();
        }
        catch (e) {
          reject(e);
        }
      }).fail((jqXhr, textStatus, errorThrown) => {
        reject(errorThrown);
      });
      }
      catch (e) {
        reject(e);
      }
    });
  },

  updateSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },
});
