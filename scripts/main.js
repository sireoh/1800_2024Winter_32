var date = new Date()

var timezone = new Intl.DateTimeFormat().resolvedOptions().timeZone

//https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=weather_code&daily=weather_code,sunrise,sunset&timezone=America%2FLos_Angeles&forecast_days=1

if (date.getHours()) {
    
}

//choose which class/id will be clicked to query the database for the term.
document.querySelector(".moodclouds").addEventListener("click", function getTerm() {
    const hapValue = document.querySelector('input[name=happiness]:checked').value;
    const eneValue = document.querySelector('input[name=energy]:checked').value;
    db.collection("moodTerms").doc(hapValue).collection(eneValue).doc("term1").get("term")
        .then( doc => {
            moodterm = doc.data().term;
            document.getElementById("jsMoodterm").innerHTML = moodterm;
        } );
});