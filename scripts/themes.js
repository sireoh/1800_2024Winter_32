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
                Hat 5: ${doc.data().hat5}<br/>
                hat 6: ${doc.data().hat6}<br/>
                hat 7: ${doc.data().hat7}<br/>
                hat 8: ${doc.data().hat8}<br/>
                Hat 9: ${doc.data().hat9}<br/>
                Hat 10: ${doc.data().hat10}<br/>
                Hat 11: ${doc.data().hat11}<br/>
                Hat 12: ${doc.data().hat12}<br/>
                Hat 13: ${doc.data().hat13}<br/>
                hat 14: ${doc.data().hat14}<br/>
                hat 15: ${doc.data().hat15}<br/>
                hat 16: ${doc.data().hat16}<br/>
                Hat 17: ${doc.data().hat17}<br/>
                Hat 18: ${doc.data().hat18}<br/>
                Hat 19: ${doc.data().hat19}<br/>
                Hat 20: ${doc.data().hat20}<br/>
                Hat 21: ${doc.data().hat21}
                `;
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
}
displayThemeMockData("themes");


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