import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', { path: '/books' }, function() {
    this.route('detail', { path: '/:id' });
  });
  this.route('edit-book', { path: '/:id/edit-book' });
  this.route('speakers', { path: '/speakers' });
  this.route('404', { path: '*path'});
});

export default Router;
