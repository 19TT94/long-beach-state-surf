import Ember from 'ember';

const modal =
{
    'title':'Nicaragua Team Trip 2017',
    'url':'https://player.vimeo.com/video/223620822',
    'credit':'Ruben Munoz',
    'description':'Here is a highlight of the team\'s trip to Nicaragua. Brews, Barrels, and Sandra\'s cooking.'
};

const team = [
    {
        'profile':'/assets/images/seabass.jpg',
        'name': 'Sebastian Ospina',
        'position': 'President'
    },
    {
        'profile':'/assets/images/taylor.jpg',
        'name': 'Taylor Tobin',
        'position': 'Vice President'
    },
    {
        'profile':'/assets/images/ian/ian-profile.png',
        'name': 'Ian Tachel',
        'position': 'Former President'
    },
    {
        'profile':'/assets/images/randy.jpg',
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
    },

    getTeam() {
        return new Ember.RSVP.Promise((res, rej) => {
            // on sucess
            res(team);
            //on failure
            rej(reason);
        });
    }
});
