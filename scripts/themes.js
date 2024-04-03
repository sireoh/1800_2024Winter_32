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
var startingMoney = 100;
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
        <button id="hatTheme${hat.hatID}" class="hatTheme" onClick="purchaseHat(${hat.price}, '${hat.hatType}')">
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
document.getElementById("currentAmtOfMoney").innerHTML = getCurrentAmt();

function purchaseHat(price, hatType) {
    if (startingMoney >= price) {
        alert("You have purchaed a " + hatType + " hat for the price of: " + price);
        startingMoney -= price;
        document.getElementById("currentAmtOfMoney").innerHTML = getCurrentAmt();
    } else {
        alert("You do not have enough rewards points, do more check in to collect more !!");
    }
}
populateThemes();