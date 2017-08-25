import Ember from 'ember';

export default Ember.Route.extend({
    api: Ember.inject.service(),

    model(params) {
        return Ember.RSVP.hash({
            team: this.get('api').getTeam(),
            videos: this.get('api').getVideos(),
            events: this.get('api').getEvents()
        });
    },

    actions: {
        link(item, anchor) {
            let $elem = $(anchor);
            let $scrollto = $('body').scrollTop($elem.offset().top - 20);
        }
    }
});
