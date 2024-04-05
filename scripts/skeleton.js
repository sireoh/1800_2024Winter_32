//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    document.getElementById("navPlaceholder").innerHTML =
    `
    <a href="main.html"><i class="fa-solid fa-home"></i></a>
    <a href="main.html">Mindful <i class="fa-solid fa-rainbow"></i> Minute</a>
    <span id="currentAmtOfMoney"></span>
    <a href="themes.html"><i class="fa-solid fa-coins"></i></a>
    `;
    document.getElementById("footerPlaceholder").innerHTML =
    `
    <a href="journal.html"><i class="fa-solid fa-book"></i></a>
    <a href="themes.html"><i class="fa-solid fa-trophy"></i></a>
    <a href="graphs.html"><i class="fa-solid fa-chart-column"></i></a>
    `;
}

function goBack() {
    window.history.back();
}

loadSkeleton(); //invoke the function
