function initMap() {
    "use strict";
    new google.maps.Map(document.getElementsByClassName('map')[0], {
        center: {lat: 34.8654859, lng: -111.7868444},
        zoom: 15
    });
}
