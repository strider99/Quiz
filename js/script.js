

function submitAnswers() {
	var total = 29;
	var score = 0;

	// Getting user input

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	var q6 = document.forms["quizForm"]["q6"].value;
	var q7 = document.forms["quizForm"]["q7"].value;
	var q8 = document.forms["quizForm"]["q8"].value;
	var q9 = document.forms["quizForm"]["q9"].value;
	var q10 = document.forms["quizForm"]["q10"].value;
	var q11= document.forms["quizForm"]["q11"].value;
	var q12 = document.forms["quizForm"]["q12"].value;
	var q13 = document.forms["quizForm"]["q13"].value;
	var q14= document.forms["quizForm"]["q14"].value;
	var q15= document.forms["quizForm"]["q15"].value;
	var q16= document.forms["quizForm"]["q16"].value;
	var q17= document.forms["quizForm"]["q17"].value;
	var q18= document.forms["quizForm"]["q18"].value;
	var q19= document.forms["quizForm"]["q19"].value;
	var q20= document.forms["quizForm"]["q20"].value;
	var q21= document.forms["quizForm"]["q21"].value;
	var q22= document.forms["quizForm"]["q22"].value;
	var q23= document.forms["quizForm"]["q23"].value;
	var q24= document.forms["quizForm"]["q24"].value;
	var q25= document.forms["quizForm"]["q25"].value;
	var q26= document.forms["quizForm"]["q26"].value;
	var q27= document.forms["quizForm"]["q27"].value;
	var q28= document.forms["quizForm"]["q28"].value;
	var q29= document.forms["quizForm"]["q29"].value;
	

	// alert(q1);

	// Validation for getting answers for every question

	

	for(i = 1; i <= total; i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert("You have missed question " + i);
			return false;
		}
	}

	

	//Set answers 
	var answers = ["c","b","c","d","a","a","b","d","b","a","b","d","c","b","d","b","a","b","c","a","a","d","b","a","d","c","a","b","d"];

	//check answers
	for(i = 1; i <= total; i++){

		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}

	//Display results

	var results = document.getElementById('results');
	results.innerHTML = '<h3> You scored <span>' +score+ '</span> out of <span> ' +total+ '</span></h3>';

	alert("You have scored " +score+ " out of " +total);

	return false;
	
	
}