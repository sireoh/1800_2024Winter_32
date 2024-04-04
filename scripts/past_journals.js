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
                    journalDiv.dataset.timestamp = journalData.timestamp.toDate().toString(); // Add timestamp as data attribute
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

// Function to toggle the visibility of the calendar
function toggleCalendar() {
    var calendarContainer = document.getElementById("calendarContainer");
    calendarContainer.classList.toggle("hidden");
}

// Function to initialize the calendar
function initCalendar() {
    flatpickr("#calendarContainer", {
        mode: "single",
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length === 0) { // Check if selection is cleared
                location.reload(); // Reload the page
            } else {
                filterJournalsByDate(selectedDates[0]);
            }
        }
    });
}

// Function to filter past journals by date
function filterJournalsByDate(selectedDate) {
    var journals = document.querySelectorAll('.journal-entry');
    journals.forEach(function(journal) {
        var journalDate = new Date(journal.dataset.timestamp);
        if (journalDate.toDateString() === selectedDate.toDateString()) {
            journal.style.display = 'block';
        } else {
            journal.style.display = 'none';
        }
    });
}

// Call the function to load past journals when the page loads
window.onload = function() {
    // Load past journals
    firebase.auth().onAuthStateChanged(function(user) {
        loadPastJournals(user);
    });

    // Initialize calendar
    initCalendar();

    // Attach click event listener to the toggle calendar button
    document.getElementById("toggleCalendarBtn").addEventListener("click", toggleCalendar);
};


