let count =0; // initial count

function increaseCount(){
	count++;
	displayCount();
	checkCountValue();
}
function displayCount(){
	document.getElementById('countDisplay').innerHTML=count;
}



function checkCountValue(){
	if (count===10){
		alert ("Congratulations");
	} else if (count ===20){
		alert ("keet it up");
		}
}
