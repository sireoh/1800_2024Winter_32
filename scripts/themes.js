function displayThemeMockData(collection) {
    db.collection(collection).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                document.getElementById("themeDrop").innerHTML =
                `
<<<<<<< HEAD
                hat 1: ${doc.data().hat1}<br/>
                hat 2: ${doc.data().hat2}<br/>
                hat 3: ${doc.data().hat3}<br/>
                hat 4: ${doc.data().hat4}<br/>
                hat 5: ${doc.data().hat5}<br/>
                hat 6: ${doc.data().hat6}<br/>
                hat 7: ${doc.data().hat7}<br/>
                hat 8: ${doc.data().hat8}<br/>
                hat 9: ${doc.data().hat9}<br/>
                hat 10: ${doc.data().hat10}<br/>
                hat 11: ${doc.data().hat11}<br/>
                hat 12: ${doc.data().hat12}<br/>
                hat 13: ${doc.data().hat13}<br/>
                hat 14: ${doc.data().hat14}<br/>
                hat 15: ${doc.data().hat15}<br/>
                hat 16: ${doc.data().hat16}<br/>
                hat 17: ${doc.data().hat17}<br/>
                hat 18: ${doc.data().hat18}<br/>
                hat 19: ${doc.data().hat19}<br/>
                hat 20: ${doc.data().hat20}<br/>
                hat 21: ${doc.data().hat21}
=======
                Hat 1: ${doc.data().hat1}<br/>
                Hat 2: ${doc.data().hat2}<br/>
                Hat 3: ${doc.data().hat3}<br/>
                Hat 4: ${doc.data().hat4}<br/>
                Hat 5: ${doc.data().hat5}
>>>>>>> 820d3554b8c003e561f3963a26d335e82501be25
                `;
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
}
//displayThemeMockData("themes");




    var startingPoints = 100;
    var divElement = document.getElementById("rewardPoints")
    divElement.innerHTML = "$" + startingPoints;


function addRewardPoints() {
    let startingPoints = amt;
    let addPoints = 10;
    let newAmt = currentPoints + addPoints;
    // startingPoints += amt;
    //document.getElementById("rewardPoints").innerHTML = "$" + amt;
}

function removeRewardPoints(num, subtractValue){
    return num - subtractValue;
}

var docRef = db.collection("themes").doc("item1");
// docRef.get().then(function(doc) {
//     if (doc.exists){
//         console.log(doc.data());
//     }
    
// })




// themeRef.get().then(function(doc) {
//     if(doc.exists){
//         console.log("Data " + themeRef.data());
//     }
//     else {
//         console.log("Data no exist");
//     }
// })
docRef.get().then(function(doc) {
    if (doc.exists) {
        var hat1Value = doc.data().hat1;
        console.log("Current value of hat1:", hat1Value);

        // Perform subtraction
        var newValue = hat1Value - 1;
        console.log("New value after subtraction:", newValue);
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

document.querySelector("#hat1").addEventListener("click", function() {
    docRef.get().then(function(doc){
        var hat1Price = doc.data().hat1;
    
    var subtractedNum = removeRewardPoints(startingPoints, hat1Price)
    divElement.innerHTML = "$ " + subtractedNum;
})
})

document.querySelector("#hat2").addEventListener("click", function(e) {
    var subtractedNum = removeRewardPoints(99, 4)
    divElement.textContent = "$ " + subtractedNum;
})

document.querySelector("#hat3").addEventListener("click", function(e) {
    var subtractedNum = removeRewardPoints(startingPoints, 57)
    divElement.textContent = "$ " + subtractedNum;
})

document.querySelector("#hat4").addEventListener("click", function(e) {
    var subtractedNum = removeRewardPoints(startingPoints, 34)
    divElement.textContent = "$ " + subtractedNum;
})

document.querySelector("#hat5").addEventListener("click", function(e) {
    var subtractedNum = removeRewardPoints(startingPoints, 25)
    divElement.textContent = "$ " + subtractedNum;
})

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