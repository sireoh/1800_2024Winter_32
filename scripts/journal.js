// Function to submit the journal input field
function writeJournal() {

    let journalEntry = document.getElementById("description").value;

    // Check if the journal entry is empty
    if (journalEntry === "") {
        // Show an alert if the text field is empty
        alert("You cannot submit an empty journal entry.");
        return; // Exit the function if the entry is empty
    }

    // Ask for confirmation before submitting
    var confirmation = confirm("Are you sure you want to submit this journal entry?");
    if (!confirmation) {
        // If user cancels, exit the function
        return;
    }

    var user = firebase.auth().currentUser;
    if (user) {
        var currentUser = db.collection("users").doc(user.uid);
        var userID = user.uid;

        // Get the document for the current user.
        db.collection("journals").add({
            userID: userID,
            description: journalEntry,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            window.location.href = "thanks.html"; // Redirect to the thanks page
        });
    } else {
        console.log("No user is signed in");
        window.location.href = 'review.html';
    }
}

// Function to clear the input field with confirmation
function clearInputField() {
    // Display a confirmation dialog
    var confirmation = confirm("Are you sure you want to clear the input field?");
    
    // If the user confirms, clear the input field
    if (confirmation) {
        document.getElementById("description").value = ""; // Clear the textarea value
    }
}

// Event listener for the Clear button
document.getElementById("clear").addEventListener("click", clearInputField);


// Event listener for all anchors that navigate to other pages
var buttons = document.querySelectorAll('a');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var journalEntry = document.getElementById("description").value.trim();
        if (journalEntry !== "") {
            var confirmation = confirm("You have unsaved changes. Are you sure you want to leave this page?");
            if (!confirmation) {
                event.preventDefault(); // Prevent the default action (navigation to another page)
            }
        }
    });
});

