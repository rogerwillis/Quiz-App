
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
	
	for (var i = 1 ; i < q2.options.length +1; i++) {
		console.log(i);
	}
	//$(".question-selection").text(q1.question);
	
	
	}



$(document).ready(function(e) {

displayQuestions();

});