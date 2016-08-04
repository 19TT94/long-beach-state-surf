import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('contact');
  this.route('team');
  this.route('club');
  this.route('sponsers');
});

export default Router;

Ember.Route.reopen({
    activate: function() {
      var cssClass = this.toCssClass();
      // you probably don't need the application class
      // to be added to the body
      if (cssClass != 'application') {
        Ember.$('body').addClass(cssClass);
      }
    },
    deactivate: function() {
      Ember.$('body').removeClass(this.toCssClass());
    },
    toCssClass: function() {
      return this.routeName.replace(/\./g, '-').dasherize();
    }
})
