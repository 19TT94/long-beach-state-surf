import Ember from 'ember';

export default Ember.Route.extend({
    api: Ember.inject.service(),

    model(params) {
        // return this.get('api').getTeam();

        return {
            team: this.get('api').getTeam(),
            events: this.get('api').getEvents()
        };
    },

    events(params) {
        return this.get('api').getEvents();
    }

});
