$( document ).ready(function(){
  // reset();
  var Random=Math.floor(Math.random()*101+19)
 
  // Starts with a random number between 19 - 120 at the beginning
  $('#randomNumber').text(Random);
 
  // Appending random number to the randomNumber id in html 
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  
  //Random numbers between 1-12 for each crystal
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  
  //  Tally Variables
$('#numberOfWins').text(wins);
$('#numberOfLosses').text(losses);

//Resets the game
function reset(){
  wins = 0;
  losses = 0;
  var num1= Math.floor(Math.random()*11+1);
  var num2= Math.floor(Math.random()*11+1);
  var num3= Math.floor(Math.random()*11+1);
  var num4= Math.floor(Math.random()*11+1);
  
}







//Wins to the userTotal
function winner(){
alert("You win!");
  wins++; 
  $('#numberOfWins').text(wins);
  reset();
}
//losses to the userTotal
function loser(){
alert ("You lose!");
  losses++;
  $('#numberOfLosses').text(losses);
  reset()
}
//Clicks for crytals
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //wins & losses conditionals
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } console.log(num1);
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 