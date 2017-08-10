import Ember from 'ember';

export default Ember.Component.extend({
    close: false,

    actions: {
        toggleClose() {
            this.toggleProperty('close');
        }
    }
});
