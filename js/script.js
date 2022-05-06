// Created by: Anita Kay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  	// initialize variables
	let cost = "Please make a selection above."
	
	// get age and day of the week
	let age = parseInt(document.getElementById('age').value)	
	let select = document.getElementById('day');
	let day = select.options[select.selectedIndex].value;

  // Define constants
  const CHILD_FREE = 5
  const ADULT_FREE = 95
  const STUDENT_YOUNG = 12
  const STUDENT_OLD = 21
  
    // If the age is below 5 or above 95, display "The cost is free for you."
	if (age < CHILD_FREE || age > ADULT_FREE) {
		cost = "The cost is free for you."
	}
    // If the day is Tuesday or Thursday, or the age is between 12 and 21, display, "You get a student discount."
	else if (((day == "Tuesday") || (day == "Thursday")) || ((age >= STUDENT_YOUNG) && (age <= STUDENT_OLD))) {
		cost = "You get a student discount."
	}
    // If none of the above are true, display, "You have to pay regular price."
	else if ((age > 0) || (day != "")) {		
		cost = "You have to pay regular price."
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = cost
}