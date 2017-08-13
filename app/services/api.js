import Ember from 'ember';

const modal =
{
    'title':'Nicaragua Team Trip 2017',
    'url':'https://player.vimeo.com/video/223620822',
    'credit':'Ruben Munoz',
    'description':'Here is a highlight of the team\'s trip to Nicaragua. Brews, Barrels, and Sandra\'s cooking.'
};

const events = [
    {
        'spot': 'Blacks Contest',
        'location': 'San Diego',
        'date': 'October 28-29'
    },
    {
        'spot': 'Cardiff by the Sea',
        'location': 'Seaside Reef',
        'date': 'November 11-12'
    },
    {
        'spot': 'The Lane',
        'location': 'Santa Cruz',
        'date': 'December 2-3'
    },
    {
        'spot': '9th St.',
        'location': 'Huntington Beach',
        'date': 'January 20-21'
    },
    {
        'spot': 'Ventura Harbor',
        'location': 'Ventura',
        'date': 'February 3'
    }
];

const team = [
    {
        'profile':'/assets/images/seabass.jpg',
        'name': 'Sebastian Ospina',
        'position': 'President',
        'major':'Computer Science',
        'board':'5\'6\'\' Hypto Crypto',
        'home':'San Luis Obispo, Ca',
        'favorite':'Craig Anderson'
    },
    {
        'profile':'/assets/images/taylor.jpg',
        'name': 'Taylor Tobin',
        'position': 'Vice President',
        'major':'Computer Science',
        'board':'5\'6\'\' Hypto Crypto',
        'home':'San Luis Obispo, Ca',
        'favorite':'Craig Anderson'
    },
    {
        'profile':'/assets/images/ian/ian-profile.png',
        'name': 'Ian Tachel',
        'position': 'Former President',
        'major':'Computer Science',
        'board':'5\'6\'\' Hypto Crypto',
        'home':'San Luis Obispo, Ca',
        'favorite':'Craig Anderson'
    },
    {
        'profile':'https://placehold.it/500x500',
        'name': 'Randy Harp',
        'position': 'Former Vice President',
        'major':'Computer Science',
        'board':'5\'6\'\' Hypto Crypto',
        'home':'San Luis Obispo, Ca',
        'favorite':'Craig Anderson'
    }
];

const club = [
    {
        'profile':'http://placehold.it/500x500',
        'name':'Could be you!',
        'position':'President',
    },
    {
        'profile':'http://placehold.it/500x500',
        'name':'Could be you!',
        'position':'Vice President',
    },
    {
        'profile':'http://placehold.it/500x500',
        'name':'Could be you!',
        'position':'Treasurer',
    }
];

const supporters = [
    {
        'sponser':'http://placehold.it/500x500',
        'url':''
    },
    {
        'sponser':'http://placehold.it/500x500',
        'url':''
    },
    {
        'sponser':'http://placehold.it/500x500',
        'url':''
    },
    {
        'sponser':'http://placehold.it/500x500',
        'url':''
    },
    {
        'sponser':'http://placehold.it/500x500',
        'url':''
    },
    {
        'sponser':'http://placehold.it/500x500',
        'url':''
    }
];

const community = [
    {
        'title':'International Coastal Cleanup',
        'date':'Saturday, September 16th',
        'description':'Plastic in the ocean and on the the beach is a huge problem for our environment, it ruins our beaches, and it needs to stop. The only way this problem can be solved is if we all ban together and fix it. The watermen and women of LBSU can make a huge difference at our beaches locally. Join the LBSU Surf Team/Club in this year\'s coastal cleanup. We\'ll see you out there!'
    }
];

const reason = 'There was an error.';

export default Ember.Service.extend({
    getModal() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(modal);
        });
    },

    getEvents() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(events);
        });
    },

    getTeam() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(team);
        });
    },

    getClub() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(club);
        });
    },

    getSupporters() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(supporters);
        });
    },

    getCommunity() {
        return new Ember.RSVP.Promise((res, rej) => {
            res(community);
        });
    }

});
