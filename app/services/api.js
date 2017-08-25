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
        'profile':'/assets/images/sebastian/sebastian-profile.jpg',
        'name': 'Sebastian Ospina',
        'position': 'President',
        'major':'',
        'board':'',
        'home':'',
        'favorite':''
    },
    {
        'profile':'/assets/images/taylor/taylor-profile.jpg',
        'name': 'Taylor Tobin',
        'position': 'Vice President',
        'major':'Computer Science',
        'board':'5\'6\'\' Hypto Crypto',
        'home':'San Luis Obispo, Ca',
        'favorite':'Craig Anderson'
    },
    {
        'profile':'/assets/images/emil/emil-profile.jpg',
        'name': 'Emil Alvarez',
        'position': 'Social Media Strategist',
        'major':'Psychology',
        'board':'',
        'home':'',
        'favorite':''
    },
    {
        'profile':'/assets/images/ben/ben-profile.jpg',
        'name': 'Ben Lalande',
        'position': 'Lead Videographer/Photographer',
        'major':'',
        'board':'',
        'home':'',
        'favorite':''
    },
    // {
    //     'profile':'/assets/images/ian/ian-profile.png',
    //     'name': 'Ian Tachel',
    //     'position': '',
    //     'major':'',
    //     'board':'',
    //     'home':'',
    //     'favorite':''
    // },
    // {
    //     'profile':'/assets/images/ian/ian-profile.png',
    //     'name': 'Randy Harp',
    //     'position': '',
    //     'major':'',
    //     'board':'',
    //     'home':'',
    //     'favorite':''
    // },
    {
        'profile':'/assets/images/mark/mark-profile.jpg',
        'name': 'Mark Macintosh',
        'position': '',
        'major':'',
        'board':'',
        'home':'',
        'favorite':''
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
        'sponser':'/assets/images/kalunalu.jpg',
        'url':'https://www.kalunalu.com'
    },
    {
        'sponser':'/assets/images/calidog.png',
        'url':'https://www.calidogpomade.com'
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
        return new Ember.RSVP.Promise(res => {
            res(modal);
        });
    },

    getEvents() {
        return new Ember.RSVP.Promise(res => {
            res(events);
        });
    },

    getTeam() {
        return new Ember.RSVP.Promise(res => {
            res(team);
        });
    },

    getClub() {
        return new Ember.RSVP.Promise(res => {
            res(club);
        });
    },

    getSupporters() {
        return new Ember.RSVP.Promise(res => {
            res(supporters);
        });
    },

    getCommunity() {
        return new Ember.RSVP.Promise(res => {
            res(community);
        });
    }

});
