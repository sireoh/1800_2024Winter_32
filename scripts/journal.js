// Function to display custom alert modal
function showAlert(message) {
    var modal = document.getElementById("customAlertModal");
    var modalMessage = document.getElementById("modalMessage");
    modal.style.display = "block";
    modalMessage.innerText = message;
}

// Function to hide custom alert modal
function closeModal() {
    var modal = document.getElementById("customAlertModal");
    modal.style.display = "none";
}

// Function to confirm action using custom modal
function showConfirmation(message, callback) {
    showAlert(message);
    document.getElementById("modalMessage").innerHTML += "<br><button id='confirmButton'>Yes</button><button id='cancelButton'>No</button>";
    document.getElementById("confirmButton").addEventListener("click", function () {
        callback(true);
        closeModal();
    });
    document.getElementById("cancelButton").addEventListener("click", function () {
        callback(false);
        closeModal();
    });
}

// Modify existing functions to use custom modals
function writeJournal() {
    let journalEntry = document.getElementById("description").value;
    if (journalEntry === "") {
        showAlert("You cannot submit an empty journal entry.");
        return;
    }
    showConfirmation("Are you sure you want to submit this journal entry?", function (result) {
        if (result) {
            var user = firebase.auth().currentUser;
            if (user) {
                var currentUser = db.collection("users").doc(user.uid);
                var userID = user.uid;

                db.collection("journals").add({
                    userID: userID,
                    description: journalEntry,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                    window.location.href = "thanks.html"; // Redirect to the thanks page
                });
            } else {
                console.log("No user is signed in");
            }
        }
    });
}

// Function to clear the input field with confirmation
function clearInputField() {
    // Display a confirmation dialog
    showConfirmation("Are you sure you want to clear the input field?", function (result) {
        if (result) {
            document.getElementById("description").value = ""; // Clear the textarea value
        }
    });
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
// Close modal when clicking on the close button
var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        closeModal();
    });
});

// Close modal when clicking outside of it
window.onclick = function (event) {
    var modal = document.getElementById("customAlertModal");
    if (event.target == modal) {
        closeModal();
    }
}
