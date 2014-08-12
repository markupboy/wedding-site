(function() {
  var infowindow, map, mapElement, mapOptions, marker, markerPoint;

  markerPoint = new google.maps.LatLng(40.019392, -105.279429);

  mapOptions = {
    scrollwheel: false,
    zoom: 16,
    center: markerPoint,
    styles: [
      {
        "featureType": "water",
        "stylers": [
          {
            "saturation": 43
          }, {
            "lightness": -11
          }, {
            "hue": "#0088ff"
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "hue": "#ff0000"
          }, {
            "saturation": -100
          }, {
            "lightness": 99
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#808080"
          }, {
            "lightness": 54
          }
        ]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ece2d9"
          }
        ]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ccdca1"
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#767676"
          }
        ]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }, {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          }, {
            "color": "#b8cb93"
          }
        ]
      }, {
        "featureType": "poi.park",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "poi.sports_complex",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "poi.medical",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      }, {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      }
    ]
  };

  mapElement = document.querySelectorAll('.map');

  map = new google.maps.Map(mapElement[0], mapOptions);

  infowindow = new google.maps.InfoWindow({
    content: '<div id="content"> <div id="siteNotice"> </div> <h1 id="firstHeading" class="firstHeading" style="margin-bottom: 5px;">Hotel Boulderado</h1> <div id="bodyContent"> <p  style="margin-bottom: 10px;">2115 13th St, Boulder, CO</p> <p> <a href="https://www.google.com/maps/dir//Hotel+Boulderado,+2115+13th+St,+Boulder,+CO+80302/@40.019428,-105.279383,17z/data=!4m12!1m3!3m2!1s0x876bec27c729af1f:0x6752f962392942f8!2sHotel+Boulderado!4m7!1m0!1m5!1m1!1s0x876bec27c729af1f:0x6752f962392942f8!2m2!1d-105.279383!2d40.019428">Get Directions</a> </p> </div> </div>'
  });

  marker = new google.maps.Marker({
    position: markerPoint,
    map: map
  });

  google.maps.event.addListener(marker, 'click', function() {
    return infowindow.open(map, marker);
  });

}).call(this);
