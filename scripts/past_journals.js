// Function to format timestamp
function formatTimestamp(timestamp) {
    var date = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return date.toLocaleString('en-US', options);
}


// Function to load past journals of the logged-in user
function loadPastJournals(user) {
    if (user) {
        console.log("Current User ID:", user.uid); // Log current user ID
        db.collection("journals")
            .where("userID", "==", user.uid)
            .orderBy("timestamp", "desc")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // Access each document
                    var journalData = doc.data();
                    // Create a div element to display the journal entry
                    var journalDiv = document.createElement("div");
                    journalDiv.classList.add("journal-entry");
                    var formattedTimestamp = formatTimestamp(journalData.timestamp);
                    journalDiv.innerHTML =  "<p id=\"time\" +>" + formattedTimestamp + "</p>" + 
                                "<br>" + "<p>" + journalData.description + "</p>";
                    // Append the div to the journalContainer div
                    document.getElementById("journalContainer").appendChild(journalDiv);
                });
            })
            .catch((error) => {
                console.log("Error getting documents:", error); // Log any errors
            });
    } else {
        console.log("No user is signed in");
    }
}

// Listen for authentication state changes
firebase.auth().onAuthStateChanged(function(user) {
    loadPastJournals(user); // Call loadPastJournals with the user object
});

// Call the function to load past journals when the page loads
window.onload = function() {
    // You can remove this line if you're using the onAuthStateChanged listener
    // loadPastJournals(firebase.auth().currentUser);
};
