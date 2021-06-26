// from data.js
var tableData = data;

console.log(tableData);


//Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the weather data from data.js
console.log(data);

data.forEach(function(sightingReport){
	console.log(sightingReport);
	var row = tbody.append("tr");
	Object.entries(sightingReport).forEach(function([key, value]) {
		console.log(key, value);
		var cell = tbody.append("td");
		cell.text(value);
		console.log(cell);
	});
});

var submit = d3.select("#submit");

//function to take input and recreate table
submit.on("click", function() {

	//stops the page from refreshing
	d3.event.preventDefault();

	d3.select(".summary").html("");

	//user input as variable
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");

	// Filter Data
	var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
	var filteredData = tableData.filter(tableData => tableData.city === inputValue);
	var filteredData = tableData.filter(tableData => tableData.state === inputValue);
	var filteredData = tableData.filter(tableData => tableData.country === inputValue);
	var filteredData = tableData.filter(tableData => tableData.shape === inputValue);

console.log(filteredData);



	//loop through
	filteredData.forEach((datedata) => {
		var row = tbody.append("tr");
		Object.entries(datedata).forEach(([key,value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		})
	})
})

//dateinput.on("change", clickSelect)