var date = new Date()

var timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude='
            + latitude + '&longitude=' + longitude
            + '&current=weather_code&daily=weather_code,sunrise,sunset&timezone=America%2FLos_Angeles&forecast_days=1';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
} else {
    console.log("Geolocation is not supported by this browser.");
}




// if (date.getHours()) {

// }

//choose which class/id will be clicked to query the database for the term.
document.querySelector("#submit").addEventListener("click", function getTerm() {
    const hapValue = document.querySelector('input[name=happiness]:checked').value;
    const eneValue = document.querySelector('input[name=energy]:checked').value;
    db.collection("moodTerms").doc(hapValue).collection(eneValue).doc("term1").get("term")
        .then(doc => {
            moodterm = doc.data().term;
            document.getElementById("jsMoodterm").innerHTML = moodterm;
        });
});

//will pop up a menu and blur the rest of the screen for custom term entry
document.querySelector("#customButton").addEventListener("click", function blurScreen() {
    $('body').css("filter", "blur(4px)");
    alert("hello");
});

const timeElement = document.getElementById("clock");

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the string with leading zeroes
    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    timeElement.innerText = clockStr;

    // Set a timeout for one minute
    setTimeout(updateTime, 60000);
}

updateTime();
