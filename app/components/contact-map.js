import Ember from 'ember';

export default Ember.Component.extend({

    initMap: function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.7838, lng: -118.1141},
              zoom: 13,
              styles: [
                  {
                      "stylers": [
                          { "invert_lightness": true },
                          { "hue": "#0066ff" },
                          { "lightness": 2 },
                          { "gamma": 0.69 },
                          { "visibility": "on" }
                      ]
                  },{
                  }
              ]
        });
    }.on('didInsertElement')
});
