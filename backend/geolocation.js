var x = document.getElementById("demo");

export function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } 
    else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude)
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        break;
        case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        break;
        case error.TIMEOUT:
        console.log("The request to get user location timed out.")
        break;
        case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.")
        break;
    }
}

// x.addEventListener("click", getLocation);