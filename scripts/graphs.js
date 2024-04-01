// function displayGraphMockData(collection) {
//     db.collection(collection).get()
//         .then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 document.getElementById("mockGraphs").innerHTML =
//                 `
//                 January: ${doc.data().jan}<br/>
//                 February: ${doc.data().feb}<br/>
//                 March: ${doc.data().mar}<br/>
//                 April: ${doc.data().apr}<br/>
//                 May: ${doc.data().may}<br/>
//                 June: ${doc.data().june}<br/>
//                 July: ${doc.data().july}<br/>
//                 August: ${doc.data().aug}<br/>
//                 September: ${doc.data().sep}<br/>
//                 October: ${doc.data().oct}<br/>
//                 November: ${doc.data().nov}<br/>
//                 December: ${doc.data().dec}
//                 `;
//             });
//         })
//         .catch((error) => {
//             console.error("Error getting documents: ", error);
//         });
// }
// displayGraphMockData("graphs");

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

];

var data2 = [
    {
        value: 75,
        color:"purple",
        highlight: "#FF5A5E",
        label: "Purple"
    },
    {
        value: 12,
        color: "green",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 8,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 95,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }

];

var ctx = document.getElementById("myChart").getContext("2d");

function one() {
    var myNewChart = new Chart(ctx).PolarArea(data);
}

function two() {
    var myNewChart = new Chart(ctx).PolarArea(data2);
}

one();

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