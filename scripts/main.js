var currentUser;
var currentUserID;
const submitCheckArea = document.getElementById("customButton");

var checkDate = new Date();
    const offset = checkDate.getTimezoneOffset()
    checkDate = new Date(checkDate.getTime() - (offset * 60 * 1000))
    checkDate = checkDate.toISOString().split('T')[0]

//Function that calls everything needed for the main page  
function doAll() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // currentUser = db.collection("users").doc(user.uid); //global
            currentUserID = user.uid;

            // figure out what day of the week it is today
            // const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            // const d = new Date();
            // let day = weekday[d.getDay()];

            // the following functions are always called when someone is logged in
            // readQuote(day);
            insertNameFromFirestore();
            // displayCardsDynamically("hikes");
        } else {
            // No user is signed in.
            console.log("No user is signed in");
            window.location.href = "login.html";
        }
    });
}

function insertNameFromFirestore() {
    // Check if the user is logged in:
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log(user.uid); // Let's know who the logged-in user is by logging their UID
            currentUser = db.collection("users").doc(user.uid); // Go to the Firestore document of the user
            currentUser.get().then(userDoc => {
                // Get the user name
                let userName = userDoc.data().name;
                console.log(userName);
                //$("#name-goes-here").text(userName); // jQuery
                document.getElementById("name-goes-here").innerText = userName;
            })
        } else {
            console.log("No user is logged in."); // Log a message when no user is logged in
        }
    })
}


doAll();

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
window.onload = function getTermLoad() {
    const hapValue = "hap" + document.querySelector('input[name=hap-rating]:checked').value;
    const eneValue = "ene" + document.querySelector('input[name=ene-rating]:checked').value;
    db.collection("moodTerms").doc(hapValue).collection(eneValue).doc("term1").get("term")
        .then(doc => {
            moodterm = doc.data().term;
            document.getElementById("jsMoodterm").innerHTML = moodterm;
        });
}

//choose which class/id will be clicked to query the database for the term.
document.querySelector("#sliders").addEventListener("click", function getTerm() {
    const hapValue = "hap" + document.querySelector('input[name=hap-rating]:checked').value;
    const eneValue = "ene" + document.querySelector('input[name=ene-rating]:checked').value;
    db.collection("moodTerms").doc(hapValue).collection(eneValue).doc("term1").get("term")
        .then(doc => {
            moodterm = doc.data().term;
            document.getElementById("jsMoodterm").innerHTML = moodterm;
        });
});

//send the check-in data to firestore named with the date (YYYY-MM-DD)
document.querySelector("#confirmBtn").addEventListener("click", function addCheckin() {
    console.log(currentUser);
    var checkInRef = db.collection("users").doc(currentUserID).collection("checkIns");
    var hapValue = document.querySelector('input[name=hap-rating]:checked').value;
    var eneValue = document.querySelector('input[name=ene-rating]:checked').value;
    var exeValue = document.querySelector('input[name=exercise]:checked').value;
    var eatValue = document.querySelector('input[name=eat]:checked').value;
    var sleepValue = document.querySelector('input[name=sleep]:checked').value;
    
    console.log(checkDate);

    checkInRef.doc(checkDate).set({
        moodTerm: moodterm,
        happyValue: hapValue,
        energyValue: eneValue,
        exerciseValue: exeValue,
        eatingValue: eatValue,
        sleepingValue: sleepValue,
        date: firebase.firestore.FieldValue.serverTimestamp()
        // weather: to be determined


    })
});


// var docRef = db.collection("users").doc(currentUserID).collection("checkIns").doc("testing");
// console.log(checkDate);
// docRef.get().then((doc) => {
    // if (doc.exists) {
        // console.log("Document data:", doc.data());
    // } else {
        // /doc.data() will be undefined in this case
        // console.log("No such document!");
    // }
// }).catch((error) => {
    // console.log("Error getting document:", error);
// });

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
    setTimeout(updateTime, 6000);
};

updateTime();

const showDialogBtn = document.getElementById('customButtonButton');
const favDialog = document.getElementById('favDialog');
const hideDialogBtn = document.getElementById('closeDialog');

showDialogBtn.addEventListener('click', () => favDialog.showModal());
hideDialogBtn.addEventListener('click', () => favDialog.close());