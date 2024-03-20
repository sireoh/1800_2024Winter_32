function displayGraphMockData(collection) {
    db.collection(collection).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                document.getElementById("mockGraphs").innerHTML =
                `
                January: ${doc.data().jan}<br/>
                February: ${doc.data().feb}<br/>
                March: ${doc.data().mar}<br/>
                April: ${doc.data().apr}<br/>
                May: ${doc.data().may}<br/>
                June: ${doc.data().june}<br/>
                July: ${doc.data().july}<br/>
                August: ${doc.data().aug}<br/>
                September: ${doc.data().sep}<br/>
                October: ${doc.data().oct}<br/>
                November: ${doc.data().nov}<br/>
                December: ${doc.data().dec}
                `;
            });
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
}
displayGraphMockData("graphs");


// function writeGraphData() {
//     var graphRef = db.collection("graphs");
//     graphRef.add({
//         jan: "5",
//         feb: "2",
//         mar: "1",
//         apr: "6",
//         may: "3",
//         june: "7",
//         july: "6",
//         aug: "2",
//         sep: "9",
//         oct: "3",
//         nov: "1",
//         dec: "8"
//     });
//     console.log("graph mock data has been added.");
// }