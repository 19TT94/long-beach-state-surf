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
        'event': 'WOW Week',
        'location': 'Central Quad',
        'date': 'September 6-7th',
        'time': '11a-2p'
    },
    {
        'event': 'Smorgasport',
        'location': 'USU',
        'date': 'September 8th',
        'time': '7p-11p'
    },
    {
        'event': 'Team Tryouts',
        'location': '9th St. Huntington',
        'date': 'September 15th',
        'time': ' 7a-9a'
    },
    {
        'event': 'Beach Cleanup',
        'location': 'Belmont Plaza Pool',
        'date': 'September 16',
        'time': '8a-10a'
    },
    {
        'event': 'Blacks Contest',
        'location': 'San Diego',
        'date': 'October 28-29'
    },
    {
        'event': 'Cardiff by the Sea',
        'location': 'Seaside Reef',
        'date': 'November 11-12'
    },
    {
        'event': 'The Lane',
        'location': 'Santa Cruz',
        'date': 'December 2-3'
    },
    {
        'event': '9th St.',
        'location': 'Huntington Beach',
        'date': 'January 20-21'
    },
    {
        'event': 'Ventura Harbor',
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
        'position': 'Lead Videographer',
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
    {
        'profile':'/assets/images/randy/randy-profile.jpg',
        'name': 'Randy Harp',
        'position': '',
        'major':'',
        'board':'',
        'home':'',
        'favorite':''
    },
    {
        'profile':'/assets/images/kyle/kyle-profile.jpg',
        'name': 'Kyle Smith',
        'position': '',
        'major':'',
        'board':'',
        'home':'',
        'favorite':''
    },
    {
        'profile':'/assets/images/eric/eric-profile.jpg',
        'name': 'Eric Lemmerman',
        'position': '',
        'major':'',
        'board':'',
        'home':'',
        'favorite':''
    },
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

const videos = [
    {
        'url':'https://player.vimeo.com/video/153442146',
        'title':'LBSU Surfing',
        'credit':'Ben Lalande'
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
        'sponser':'/assets/images/ripcurl.gif',
        'url':'https://www.ripcurl.com'
    },
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

    getVideos() {
        return new Ember.RSVP.Promise(res => {
            res(videos);
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
