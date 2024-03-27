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

// function addRewardPoints(currentPoints, addPoints) {
//     let currentPoints = 100;
//     let addPoints = 10;
//     let totalPoints = currentPoints + addPoints;
//     let newRewardsPoints = addRewardPoints(currentPoints, addPoints);
//     console.log(newRewardsPoints);
// }


var startingPoints = 0;
function initPoints() {
    let n = startingPoints;
    document.getElementById("rewardPoints").innerHTML = "$" + n;
}


function getPoints() {
    const startingPoints = 0;
    return startingPoints;
}

function addRewardPoints() {
    let currentPoints = amt;
    let addPoints = 10;
    let newAmt = currentPoints + addPoints;
    // startingPoints += amt;
    document.getElementById("rewardPoints").innerHTML = "$" + startingPoints;
}

function removeRewardPoints(collection){
    
}
document.querySelector("#hat1").addEventListener("click", function(removeRewardPoints) {
    
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