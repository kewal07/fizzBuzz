$(document).ready(function(){
	var number = prompt("Enter a number <= 100 to demonstrate the FizzBuzz pattern");
	if(number.length == 0){
		alert("As you did not enter any number, we will start the count from 1 :) ");
		number = 1;	
	}
	number = parseInt(number);
	for(var i=number;i<=100;i++){
		if(i%3 == 0){
			$('.content').append("Fizz,");
		}
		else if(i%5 == 0){
			$('.content').append("Buzz,");
		}
		else if(i%15 == 0){
			$('.content').append("FizzBuzz,");
		}
		else{
			$('.content').append(i+",");
		}
	}
});