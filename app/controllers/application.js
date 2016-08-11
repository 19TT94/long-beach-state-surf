import Ember from 'ember';

export default Ember.Controller.extend({
    navIsExpanded: false,

    actions: {
        toggleMenu() {
            this.toggleProperty('navIsExpanded');
        }
    }
});
