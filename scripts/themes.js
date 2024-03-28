function displayThemeMockData(collection) {
    db.collection(collection).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                document.getElementById("themeDrop").innerHTML =
                `
                Hat 1: ${doc.data().hat1}<br/>
                Hat 2: ${doc.data().hat2}<br/>
                Hat 3: ${doc.data().hat3}<br/>
                Hat 4: ${doc.data().hat4}<br/>
                Hat 5: ${doc.data().hat5}
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

document.querySelector("#hat1").addEventListener("click", function(e) {
    var subtractedNum = removeRewardPoints(startingPoints, 1)
    divElement.textContent = "$ " + subtractedNum;
})

document.querySelector("#hat2").addEventListener("click", function(e) {
    var subtractedNum = removeRewardPoints(startingPoints, 4)
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
//         Hat1: "1",
//         Hat2: "4",
//         Hat3: "57",
//         Hat4: "34",
//         Hat5: "25",
//         Hat6: "26",
//         Hat7: "85",
//         Hat8: "31",
//         Hat9: "16",
//         Hat10:"52",
//         Hat11:"62",
//         Hat12:"74",
//         Hat13:"53",
//         Hat14:"39",
//         Hat15:"27",
//         Hat16:"19",
//         Hat17:"69",
//         Hat18:"42",
//         Hat19:"21",
//         Hat20:"70",
//         Hat21:"40"
//     });
//     console.log("theme mock data has been added.");
// }