
function mutation(arr) {
	var Answer = arr[0].toLowerCase(); // changes to lower case
	var MutatedAnswer = arr[1].toLowerCase(); // changes to lower case 
	
	for (var i = 0; i < MutatedAnswer.length; i++){ // for loop for mutated answer

	var value = Answer.indexOf(MutatedAnswer[i]); // checks for correct letters

	if(value === -1){ // if missing letters from previous word to new word returns false
	return false;

}
}
return true; // if it does contain correct letters returns true

}

mutation(["hello", "hey"]);