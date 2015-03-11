$(document).ready(function() {
	onReady();
})


function onReady()
{
	$("#buzzit").click(function() {
		runFizzBuzz($("#fizzbuzzmax").val())
	});
}


function runFizzBuzz(pMax)
{
	var outputQry = $("#output-div");
	outputQry.html("");

	var maxNo = + pMax;   // a "trick" for using short syntax

	if (maxNo == NaN)
	{
		alert("Your input of " + pMax + " is not a number. Please try again.");
	}

	if (maxNo < 1 || maxNo % 1 != 0)
	{
		alert("Your input of " + pMax + " is not an integer, is blank or is < 1. Please try again.");
	}

	// var maxNo = parseInt(pMax);   // preferred way

	for (var x = 1; x <= maxNo; x++)
	{
		if (x % 3 == 0 && x % 5 == 0)
		{
			outputValue(outputQry, "fizz buzz");
		}
		else if (x % 3 == 0)
		{
			outputValue(outputQry, "fizz");
		}
		else if (x % 5 == 0)
		{
			outputValue(outputQry, "buzz");
		}
		else
		{
			outputValue(outputQry, x);
		}
	}

}


function outputValue(pQry, pValue)
{
	pQry.append(pValue + "<br/>");
}