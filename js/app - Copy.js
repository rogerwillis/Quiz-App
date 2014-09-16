
//question objects
var q1 = {
	question:"Question 1",
	options:["Option 1", "Option 2", "Option 3", "Option 4"],
	answer:"Option 1"
	};
	
var q2 = {
	question:"Question 1",
	options:["Option 1", "Option 2", "Option 3", "Option 4"],
	answer:"Option 1"
	};


var displayQuestions = function(){
	
	$(".question").text(q1.question);
	
		var myStringArray = ["Hello","World"];
		var arrayLength = myStringArray.length;
		for (var i = 0; i < arrayLength; i++) {
			console.log(myStringArray[i]);
			$(".question-selection").text(myStringArray[i]);
			//Do something
		}
	
	}



$(document).ready(function(e) {

displayQuestions();

});