import Ember from 'ember';

const modal = [
    {
        'title':'Nicaragua Team Trip 2017',
        'url':''
    }
];

const team = [
    {
        'name': 'Sebastian Ospina',
        'position': 'President'
    },
    {
        'name': 'Taylor Tobin',
        'position': 'Vice President'
    },
    {
        'name': 'Ian Tachel',
        'position': 'Former President'
    },
    {
        'name': 'Randy Harp',
        'position': 'Former Vice President'
    }
];

const reason = 'There was an error.';

export default Ember.Service.extend({
    getModal() {
        return new Ember.RSVP.Promise((res, rej) => {
            // on sucess
            res(modal);
            //on failure
            rej(reason);
        });
    }
});
