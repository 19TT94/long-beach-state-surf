import Ember from 'ember';

export default Ember.Route.extend({
    api: Ember.inject.service(),

    model(params) {
        return Ember.RSVP.hash({
            team: this.get('api').getTeam(),
            events: this.get('api').getEvents()
        });
    }
});
