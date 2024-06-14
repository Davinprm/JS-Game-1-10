let reMatch = true; //for make 'while' function is bool result
let chance = 3; //chance of playing game
let result = "";

function com() {
  //make random num for starting n manipulate d result for being range between 1 - 10
  let c = Math.floor(Math.random() * 10) + 1;
  //first func to rounds d num down to d nearest int
  //second func took random num between  0 n 1

  return c;
}

let computer = com();

//rules
while (reMatch) {
  //looping if it's 'true'
  let p = prompt(
      "We'll throw a random number and you have to\nguess the number between 1 - 10."
  ); //took players input
  if (p == computer) {
    result = "You choose the right number, Congrats!";
    computer = com();

    //repeat for making a new random num on console

    chance = 3;
    //revive user's chance
  }
  //make conditional n a clue for user n then took user's chance
  else if (p > 10 || p <= 0) {
    result = "Invalid text, only input between 1 & 10.";
  } else if (p < computer) {
    result = "Almost! it's above you.";
    chance -= 1;
  } else if (p > computer && p <= 10) {
    result = "Almost! it's below you.";
    chance -= 1;
  }

  //pop up result n rematch confirmation
  alert(result + " Your number is " + p + "\nYour chance is " + chance);
  if (chance <= 3 && chance > 0) {
    //make conditional for chance
    reMatch = confirm("Want to rematch?");
  } else {
    alert("You lost your chance.\nThe answer is = " + computer); //lost user's chance n show d answer
    chance = 3; //revive user's change for restarting
    reMatch = confirm("Want to rematch?"); //if confirmation is false, stop looping

    computer = com();
    //repeat for making a new random num on console
  }
}
alert("Thanks for played!");
