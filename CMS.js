$(document).ready(function(){
	var availableTags = [
		//An array of topic names will go here. 
	];
	
	//Requirement 1 
	$( "#autocomplete" ).autocomplete({
			source: availableTags
	});
	//Requirement 2
	$( "#gotoMap" ).button();
	
	//Requirement 3
	$( "#accordion" ).accordion();
	
	//Requirement 4
	$( "#datepicker" ).datepicker({
		inline: true
		});
	//Requirement 5
	$( "#progressbar" ).progressbar({
			value: 20
		});
	 
	$( "#button" ).button();
	
	//Requirement 6
	$( "#radioset" ).buttonset();
	
	//Requirement 7
	$( "#tabs" ).tabs();
	
	//Requirement 8
	$( document ).tooltip();
});