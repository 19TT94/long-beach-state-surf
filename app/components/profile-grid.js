import Ember from 'ember';

export default Ember.Component.extend({
    modal: false,

    actions: {
        toggleModal() {
            $('profile-modal').addClass('show')
        }
    }
});
