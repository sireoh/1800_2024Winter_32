// function displayThemeMockData(collection) {
//     db.collection(collection).get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 document.getElementById("themeDrop").innerHTML =
//                 `
//                 hat 1: ${doc.data().hat1}
//                 hat 2: ${doc.data().hat2}
//                 hat 3: ${doc.data().hat3}
//                 hat 4: ${doc.data().hat4}
//                 hat 5: ${doc.data().hat5}
//                 hat 6: ${doc.data().hat6}
//                 hat 7: ${doc.data().hat7}
//                 hat 8: ${doc.data().hat8}
//                 hat 9: ${doc.data().hat9}
//                 hat 10: ${doc.data().hat10}
//                 hat 11: ${doc.data().hat11}
//                 hat 12: ${doc.data().hat12}
//                 hat 13: ${doc.data().hat13}
//                 hat 14: ${doc.data().hat14}
//                 hat 15: ${doc.data().hat15}
//                 hat 16: ${doc.data().hat16}
//                 hat 17: ${doc.data().hat17}
//                 hat 18: ${doc.data().hat18}
//                 hat 19: ${doc.data().hat19}
//                 hat 20: ${doc.data().hat20}
//                 hat 21: ${doc.data().hat21}
//                 `;
//             });
//         })
//         .catch((error) => {
//             console.error("Error getting documents: ", error);
//         });
// }
//displayThemeMockData("themes");




//     var startingPoints = 100;
//     var divElement = document.getElementById("rewardPoints")
//     divElement.innerHTML = "$" + startingPoints;


// function addRewardPoints() {
//     let startingPoints = amt;
//     let addPoints = 10;
//     let newAmt = currentPoints + addPoints;
    // startingPoints += amt;
    //document.getElementById("rewardPoints").innerHTML = "$" + amt;

// function removeRewardPoints(num, subtractValue){
//     return num - subtractValue;
// }

// var docRef = db.collection("themes").doc("item1");
// var docRef2 = db.collection("themes").doc("item2");
// var docRef3= db.collection("themes").doc("item3");
// var docRef4 = db.collection("themes").doc("item4");
// var docRef5 = db.collection("themes").doc("item5");

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         var hat1Value = doc.data().hat1;
//         console.log("Current value of hat1:", hat1Value);

//         // Perform subtraction
//         var newValue = hat1Value - 1;
//         console.log("New value after subtraction:", newValue);
//     } else {
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

// document.querySelector("#hat1").addEventListener("click", function() {
//     docRef.get().then(function(doc){
//         var hat1Price = doc.data().hat1;
    
//     var subtractedNum = removeRewardPoints(startingPoints, hat1Price)
//     startingPoints = subtractedNum;
//     divElement.innerHTML = "$" + subtractedNum;
// })
// })

// document.querySelector("#hat2").addEventListener("click", function() {
//     docRef2.get().then(function(doc){
//         var hat2Price = doc.data().hat2;
    
//     var subtractedNum = removeRewardPoints(startingPoints, hat2Price)
//     startingPoints = subtractedNum;
//     divElement.innerHTML = "$" + subtractedNum;
// })
// })

// document.querySelector("#hat3").addEventListener("click", function() {
//     docRef3.get().then(function(doc){
//         var hat3Price = doc.data().hat3;
    
//     var subtractedNum = removeRewardPoints(startingPoints, hat3Price)
//     startingPoints = subtractedNum;
//     divElement.innerHTML = "$" + subtractedNum;
// })
// })

// document.querySelector("#hat4").addEventListener("click", function() {
//     docRef4.get().then(function(doc){
//         var hat4Price = doc.data().hat4;
    
//     var subtractedNum = removeRewardPoints(startingPoints, hat4Price)
//     startingPoints = subtractedNum;
//     divElement.innerHTML = "$" + subtractedNum;
// })
// })

// document.querySelector("#hat5").addEventListener("click", function() {
//     docRef5.get().then(function(doc){
//         var hat5Price = doc.data().hat5;
    
//     var subtractedNum = removeRewardPoints(startingPoints, hat5Price)
//     startingPoints = subtractedNum;
//     divElement.innerHTML = "$" + subtractedNum;
// })
// })

// function writeThemesData() {
//     var themeRef = db.collection("themes");
//     themeRef.add({
//         hat1: "1",
//         hat2: "4",
//         hat3: "57",
//         hat4: "34",
//         hat5: "25",
//         hat6: "26",
//         hat7: "85",
//         hat8: "31",
//         hat9: "16",
//         hat10:"52",
//         hat11:"62",
//         hat12:"74",
//         hat13:"53",
//         hat14:"39",
//         hat15:"27",
//         hat16:"19",
//         hat17:"69",
//         hat18:"42",
//         hat19:"21",
//         hat20:"70",
//         hat21:"40"
//     });
//     console.log("theme mock data has been added.");
// }
//starting money is taken from local storage, if there is no local storage data then starting money is set to 100.
var startingMoney = parseInt(localStorage.getItem('startingMoney')) || 100;
var amtOfHats = 30;
var htmlStr = "";

function genRandomHat() {
    const hats = [
        "fa-solid fa-hat-wizard",
        "fa-solid fa-hat-cowboy-side",
        "fa-solid fa-hat-cowboy",
        "fa-brands fa-pied-piper-hat",
        "fa-solid fa-helmet-safety",
        "fa-solid fa-graduation-cap",
        "fa-brands fa-redhat"
    ]
    let i = Math.floor(Math.random() * hats.length);
    return hats[i];
}

function genRandomPrice() {
    let maxPrice = 55;
    let i = Math.floor(Math.random() * maxPrice);
    return i;
}

//Hat Properties for the constructor
var hatID = 0;
var hatType = "";
var price = 0;

//Hat Constructor
function Hat(hatID, hatType, price) {
    this.hatID = hatID;
    this.hatType = hatType;
    this.price = price;
}

function populateThemes() {
    var poo = "hello";
    for(i = 1; i <= amtOfHats; i++) {
        var hat = new Hat(i, genRandomHat(), genRandomPrice());
        htmlStr += `
        <button id="hatTheme${hat.hatID}" class="hatTheme" onClick="writeJournal(${hat.price}, '${hat.hatType}')">
            <i class="${hat.hatType}"></i><br/>
            Hat ${hat.hatID}<br/>
            $${hat.price}
        </button>
        `;
    }
    document.getElementById("populateShop").innerHTML = htmlStr;
}

function getCurrentAmt() {
    return startingMoney;
}

function updateCurrentAmtUI() {
    document.getElementById("currentAmtOfMoney").innerHTML = getCurrentAmt();
}

document.addEventListener("DOMContentLoaded", function () {
    populateThemes();
    updateCurrentAmtUI();
});


// function purchaseHat(price, hatType) {
    

    // if (startingMoney >= price) {
    //     alert("You have purchaed a " + hatType + " hat for the price of: " + price);
    //     startingMoney -= price;
    //     updateCurrentAmtUI();
        
    //     //updates local storage data for startingMoney variable
    //     localStorage.setItem('startingMoney', startingMoney)
    //     // document.getElementById("currentAmtOfMoney").innerHTML = getCurrentAmt();
    // } else {
    //     alert("You do not have enough rewards points, do more check in to collect more !!");
    // }
// }
populateThemes();




/** Journal Functions */

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
        showConfirmation("Hello world");
        document.getElementById("modalMessage").innerHTML = "Hat has been set successfully.<br/><button id='cancelButton' onClick='closeModal()'>Ok</button>";
        callback(true);
        closeModal();
    });
    document.getElementById("cancelButton").addEventListener("click", function () {
        callback(false);
        closeModal();
    });
}

// Modify existing functions to use custom modals
function writeJournal(price, hatType) {
    var hatName = ""; 
    showAlert("You cannot submit an empty journal entry.");
    switch (hatType) {
        case "fa-solid fa-hat-wizard":
            hatName = "Wizard Cap";
            break;
        case "fa-solid fa-hat-cowboy-side":
            hatName = "Texas Cap";
            break;
        case "fa-solid fa-hat-cowboy":
            hatName = "Cowboy Headcover";
            break;
        case "fa-brands fa-pied-piper-hat":
            hatName = "Pied Piper Hat";
            break;
        case "fa-solid fa-helmet-safety":
            hatName = "Safety Helmet";
            break;
        case "fa-solid fa-graduation-cap":
            hatName = "Graduation Cap";
            break;
        case "fa-brands fa-redhat":
            hatName = "Red Cap";
            break;
        default:
            console.log("Error");
            break;
    }

    showConfirmation(`Would you like to select ${hatName}, for the price of ${price}?`, function (result) {
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

// // Event listener for the Clear button
// document.getElementById("clear").addEventListener("click", clearInputField);


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
