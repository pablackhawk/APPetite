$(document).ready(function() {

// http://opentable.herokuapp.com/api/restaurants?zip=92691

function searchZipcode (){
	
	var queryZipcode = $("#zipcodeInput").val().trim();//$(this).data("zipcodeInput");
	//console.log(queryZipcode);

	var queryURL = "http://opentable.herokuapp.com/api/restaurants?zip=" + queryZipcode;
	console.log(queryURL);
	/*$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response) {
		console.log(queryURL);
		console.log(response);
	});*/

	fetch(queryURL)
	.then((resp) => resp.json())
	.then(function(data){
		console.log(data);
	})
	
	alert("Hello");

}

	$("#submitZipcode").on("click", function(){
		searchZipcode();
	});















});
//Document ready closing tag