import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  // normalize(model, hash) {
  //   let hashCopy = Object.assign({}, hash);
  //   hashCopy.attributes = {};
  //   hashCopy.attributes.title = hashCopy.title;
  //   hashCopy.attributes.author = hashCopy.author;
  //   hashCopy.attributes.pages = hashCopy.pages;
  //   hashCopy.attributes.coverURL = hashCopy.coverURL;
  //   hashCopy.attributes.descriptionURL = hashCopy.descriptionURL;
  //   hashCopy.attributes.tags = hashCopy.tags;
  //   delete hashCopy.title;
  //   delete hashCopy.author;
  //   delete hashCopy.pages;
  //   delete hashCopy.coverURL;
  //   delete hashCopy.descriptionURL;
  //   delete hashCopy.tags;
  //   hash = {
  //     data: hashCopy
  //   }

  //   return hash;
  // },

  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  }

  // serialize(snapshot, options) {
  //   let json = this._super(...arguments);
  //   json.type = snapshot.modelName;
  //   return json;
  // }
});
