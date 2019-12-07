// from data.js
var tableData = data;

console.log(tableData);


var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

//Search button
var $searchBtn = document.querySelector("#search");
var $searchBtn1 = document.querySelector("#search1");
var $searchBtn2 = document.querySelector("#search2");
var $searchBtn3 = document.querySelector("#search3");
var $searchBtn4 = document.querySelector("#search4");


$searchBtn1.addEventListener("click", handleSearchButtonClick1);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);
$searchBtn.addEventListener("click", handleSearchButtonClick);


//Render the table

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    
    var ufo = tableData[i];
    var observations = Object.keys(ufo);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < observations.length; j++) {
      var observation = observations[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[observation];
    }
  }
}


function handleSearchButtonClick() {
  // Format the search 
  var filterDate = $dateInput.value.trim();
  tableData = data.filter(function (ufo) {
    var ufoDate = ufo.datetime.toLowerCase();

    return ufoDate === filterDate;
  });

  renderTable();
}


function handleSearchButtonClick1() {

  var filterCity = $cityInput.value.trim().toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoCity = ufo.city.toLowerCase();
    return ufoCity === filterCity;
  });

  renderTable();
}


function handleSearchButtonClick2() {

  var filterState = $stateInput.value.trim().toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoState = ufo.state.toLowerCase();
    return ufoState === filterState;
  });

  renderTable();
}


function handleSearchButtonClick3() {

  var filterCountry = $countryInput.value.trim().toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoCountry = ufo.country.toLowerCase();
    return ufoCountry === filterCountry;
  });

  renderTable();
}


function handleSearchButtonClick4() {
  var filterShape = $shapeInput.value.trim().toLowerCase();
  tableData = data.filter(function (ufo) {
    var ufoShape = ufo.shape.toLowerCase();
    return ufoShape === filterShape;
  });

  renderTable();
}
renderTable();