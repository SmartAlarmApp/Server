address0 = "";
address1 = "";

latlng0 = {};
latlng1 = {};

function register_wakeup_time()
{
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log( xhttp.responseText );
        }
    };

    xhttp.open("GET", "/register_wakeup_time?origins=" + latlng0[0] + "," + latlng0[1] + "&destinations=" + latlng1[0] + "," + latlng1[1] + "&time=" + $("#time_wakeup")[0].value, true);
    xhttp.send();

}

function displayRoute(LatLng0, LatLng1, map) {

    // var start = new google.maps.LatLng(28.694004, 77.110291);
    // var end = new google.maps.LatLng(28.72082, 77.107241);
    var start = new google.maps.LatLng(LatLng0[0], LatLng0[1]);
    var end = new google.maps.LatLng(LatLng1[0], LatLng1[1]);


    var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
    directionsDisplay.setMap(null); // map should be already initialized.
    directionsDisplay.setMap(map); // map should be already initialized.

    var request = {
        origin : start,
        destination : end,
        travelMode : google.maps.TravelMode.DRIVING
    };

    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
        console.log(response);
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

}

$(document).ready(function () {
    // create the map
    map = $("#map_canvas").gmap3(
    {
        lat: 56.49055273646381,
        lng: 84.97993469238281,
        zoom: 12
    });

    console.log(map.map);
 
    map.onclickGetLatLng($("#latlng"), function(latlng)
        {
            console.log( latlng );

            latlng0 = latlng;


        },
        'click'
    );

    map.onclickGetLatLng($("#latlng"), function(latlng)
        {
            console.log( latlng );

            latlng1 = latlng;

            map.clear();

            displayRoute( latlng0, latlng1, map.map );

            var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log( xhttp.responseText );
                }
            };
            xhttp.open("GET", "get_routing_info?origins=" + latlng0[0] + "," + latlng0[1] + "&destinations=" + latlng1[0] + "," + latlng1[1], true);
            xhttp.send();


        },
        'rightclick'
    );

});