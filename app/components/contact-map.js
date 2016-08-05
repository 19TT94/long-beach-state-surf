import Ember from 'ember';

export default Ember.Component.extend({

    initMap: function() {

            var map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 33.7838, lng: -118.1141},
              zoom: 12,
              styles: [
                  {
                      "stylers": [
                          { "invert_lightness": true },
                          { "weight": 1 },
                          { "saturation": 6 },
                          { "gamma": 0.97 },
                          { "lightness": -2 },
                          { "hue": "#fff700" }
                      ]
                  },{
                  }
             ]
        });
    }.on('didInsertElement')
    
});
