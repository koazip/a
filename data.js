function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error, {enableHighAccuracy:true,timeout:60000,maximumAge:0});
    }
    else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function error(error) {
    console.log(error);
}

function showPosition(position) {

    var latitude = position.coords.latitude,
    longitude = position.coords.longitude;

    console.log(latitude);
    console.log(longitude);
}
