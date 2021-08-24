/*
Body Mass Index Calculator aka BMI CalC | BB - The CoderZ
*/
var weight;
var height;
var formula;
var m;
function BMI() {
	m = 0.0254;
	weight = document.getElementById ("userInput_weight").value;
	height = document.getElementById ("userInput_height").value;
	height = height * 12;
	height = height * m;
	height = height * height;
	formula = weight / height;
	document.getElementById ("bmi").value = formula;
}