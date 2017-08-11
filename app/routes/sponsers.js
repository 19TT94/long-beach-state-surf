import Ember from 'ember';

export default Ember.Route.extend({
    api: Ember.inject.service(),

    model(params) {
        return Ember.RSVP.hash({
            supporters: this.get('api').getSupporters(),
            community: this.get('api').getCommunity()
        });
    }
});
