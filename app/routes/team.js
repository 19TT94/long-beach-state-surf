import Ember from 'ember';

export default Ember.Route.extend({
    api: Ember.inject.service(),

    // model(params) {
    //     return this.get('api').getEvents();
    // },
    model(params) {
        return this.get('api').getTeam();
    }
});
