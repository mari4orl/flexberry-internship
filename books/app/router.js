import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('books', { path: '/books' }, function() {
    this.route('detail', { path: '/:id' });
    this.route('create');
    this.route('edit', { path: '/:id/edit' });
  });
  this.route('edit-book', { path: '/:id/edit-book' });
  this.route('speakers', { path: '/speakers' });
  this.route('404', { path: '*path'});
  this.route('error', { path: '*/:error'});
  this.route('meeting', { path: '/meetings' });
  this.route('speaker-edit', { path: '/:id/speakers-edit' });
  this.route('speaker-create');
  this.route('meeting-edit');
  this.route('meeting-create');
});

export default Router;
