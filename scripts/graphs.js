/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* ~~~~~~~~~~~~~~~~~~~WEEK~~~~~~~~~~~~~~~~~~~
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
// Function to fetch mock data from Firestore
async function fetchWeekMockData() {
    try {
      const snapshot = await db.collection("graphs").doc("week").get();
      return snapshot.data().values;
    } catch (error) {
      console.error("Error fetching mock data:", error);
      return [];
    }
  }
  
  async function week() {
    let existingChart = Chart.getChart("line-chart");
    if (existingChart) {
      existingChart.destroy();
    }
    
    try {
      const mockData = await fetchWeekMockData();
      
      new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"],
          datasets: [{
            data: mockData, // Use fetched mock data here
            label: "week",
            borderColor: "#3cba9f",
            fill: false
          }]
        },
        options: {
          title: {
            display: true,
            text: ''
          }
        }
      });
    } catch (error) {
      console.error("Error rendering chart:", error);
    }
  }
  week();

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* ~~~~~~~~~~~~~~~~~~~MONTH~~~~~~~~~~~~~~~~~~~
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

async function fetchMonthMockData() {
    try {
      const snapshot = await db.collection("graphs").doc("month").get();
      return snapshot.data().values;
    } catch (error) {
      console.error("Error fetching mock data:", error);
      return [];
    }
  }
  
  async function month() {
    let existingChart = Chart.getChart("line-chart");
    if (existingChart) {
      existingChart.destroy();
    }
    
    try {
      const mockData = await fetchMonthMockData();
      
      new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: Array.from({ length: 31 }, (_, i) => i + 1),
          datasets: [{
            data: mockData, // Use fetched mock data here
            label: "month",
            borderColor: "#3cba9f",
            fill: false
          }]
        },
        options: {
          title: {
            display: true,
            text: ''
          }
        }
      });
    } catch (error) {
      console.error("Error rendering chart:", error);
    }
  }

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* ~~~~~~~~~~~~~~~~~~~YEAR~~~~~~~~~~~~~~~~~~~
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

async function fetchYearMockData() {
    try {
      const snapshot = await db.collection("graphs").doc("month").get();
      return snapshot.data().values;
    } catch (error) {
      console.error("Error fetching mock data:", error);
      return [];
    }
  }

  async function year() {
    let existingChart = Chart.getChart("line-chart");
    if (existingChart) {
      existingChart.destroy();
    }
    
    try {
      const mockData = await fetchYearMockData();
      
      new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels : [ "jan", "feb", "mar", "apr",
                        "may", "jun", "jul", "aug", "sep",
                        "oct", "nov", "dec" ],
          datasets: [{
            data: mockData, // Use fetched mock data here
            label: "year",
            borderColor: "#3cba9f",
            fill: false
          }]
        },
        options: {
          title: {
            display: true,
            text: ''
          }
        }
      });
    } catch (error) {
      console.error("Error rendering chart:", error);
    }
  }


  // function month() {
//     let existingChart = Chart.getChart("line-chart");
//     if (existingChart) {
//         existingChart.destroy();
//     }
//     new Chart(document.getElementById("line-chart"), {
//         type : 'line',
//         data : {
//             labels : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                         11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//                         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ],
//             datasets : [
//                     {
//                         data : [ getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6) 
//                                 ],
//                         label : "month",
//                         borderColor : "#3cba9f",
//                         fill : false
//                     }]
//         },
//         options : {
//             title : {
//                 display : true,
//                 text : ''
//             }
//         }
//     });
// }
  // async function month() {
//     let existingChart = Chart.getChart("line-chart");
//     if (existingChart) {
//         existingChart.destroy();
//     }

//     try {
//         const monthData = Array.from({ length: 31 }, () => getRandomInt(6));

//         new Chart(document.getElementById("line-chart"), {
//             type: 'line',
//             data: {
//                 labels: Array.from({ length: 31 }, (_, i) => i + 1),
//                 datasets: [{
//                     data: monthData,
//                     label: "month",
//                     borderColor: "#3cba9f",
//                     fill: false
//                 }]
//             },
//             options: {
//                 title: {
//                     display: true,
//                     text: ''
//                 }
//             }
//         });
//     } catch (error) {
//         console.error("Error rendering chart:", error);
//     }
// }

// function year() {
//     let existingChart = Chart.getChart("line-chart");
//     if (existingChart) {
//         existingChart.destroy();
//     }
//     new Chart(document.getElementById("line-chart"), {
//         type : 'line',
//         data : {
//             labels : [ "jan", "feb", "mar", "apr",
//                         "may", "jun", "jul", "aug", "sep",
//                         "oct", "nov", "dec" ],
//             datasets : [
//                     {
//                         data : [ getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6) ],
//                         label : "year",
//                         borderColor : "#3cba9f",
//                         fill : false
//                     }]
//         },
//         options : {
//             title : {
//                 display : true,
//                 text : ''
//             }
//         }
//     });
// }

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

// function writeWeekMockGraphData() {
//     var graphRef = db.collection("graphs").doc("week");
//     // Specify the mock data here
//     var mockData = [10, 15, 20, 18, 22, 17, 13]; // Example mock data
//     graphRef.set({
//         values: mockData
//     }).then(function() {
//         console.log("Week mock data has been added.");
//     }).catch(function(error) {
//         console.error("Error adding week mock data: ", error);
//     });
// }

// async function writeMonthMockGraphData() {
//     var graphRef = db.collection("graphs").doc("month");
//     // Specify the mock data here
//     var mockData = Array.from({ length: 31 }, () => getRandomInt(6)); // Generating mock data for the month
//     try {
//         await graphRef.set({
//             values: mockData
//         });
//         console.log("Month mock data has been added.");
//     } catch (error) {
//         console.error("Error adding month mock data: ", error);
//     }
// }

// function writeYearMockGraphData() {
//     var graphRef = db.collection("graphs").doc("year");
//     // Specify the mock data here
//     var mockData = Array.from({ length: 12 }, () => getRandomInt(100)); // Generating mock data for the year
//     graphRef.set({
//         values: mockData
//     }).then(function() {
//         console.log("Year mock data has been added.");
//     }).catch(function(error) {
//         console.error("Error adding year mock data: ", error);
//     });
// }



// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

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

// function week() {
//     let existingChart = Chart.getChart("line-chart");
//     if (existingChart) {
//         existingChart.destroy();
//     }
//     new Chart(document.getElementById("line-chart"), {
//         type : 'line',
//         data : {
//             labels : [ "mon", "tues", "wed", "thurs",
//                             "fri", "sat", "sun" ],
//             datasets : [
//                     {
//                         data : [ getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6), getRandomInt(6), getRandomInt(6),
//                                     getRandomInt(6) ],
//                         label : "week",
//                         borderColor : "#3cba9f",
//                         fill : false
//                     }]
//         },
//         options : {
//             title : {
//                 display : true,
//                 text : ''
//             }
//         }
//     });
// }
// week();

// function createData() {
//     let str = "";
//     for(let i = 1; i <= 31; i++) {
//         str += `getRandomInt(6), `;
//     }
//     return str;
// }