//alert("test");
//var secretNumber=7;
 simpleGame(7);

function simpleGame(secretNumber)
{
 var guess = prompt("Guess the secret number");
 //  This checks  if guess is equal to the sercet number or if cancel is pressed 
 // otherwise   it is wrong
 if(guess != null)
 	{
 		if(isNaN(guess) || guess=== "")
 		{
 			alert("Please enter a number!");
 			simpleGame(secretNumber);
 		}
 	
  else if(secretNumber=== Number(guess))
 {
 	alert("You got it!");

 	
 }
 //  if the secret number is not guess this checks if guess is too high or low
 else
 {
 	
 	if(secretNumber<Number(guess))
 		alert("Nope guess again! The number is too high");
 	else
 		alert("Nope guess  again! The number is too low")
 	simpleGame(secretNumber);
 	 }
 	}
 	else
 	{
 		// do nothing
 	}
}
