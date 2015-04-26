//Monty Hall problem

/*3 is the correct door, and there's a number 1-3 randomly generated which acts as the 'guess'. */

var neverSwitchCount = 0;
var alwaysSwitchCount = 0;
for (var i = 0; i< 10000; i++){
    var guess = Math.floor(Math.random()*3) + 1;
    if (guess === 3) neverSwitchCount += 1;
    else if (guess != 3) alwaysSwitchCount += 1;
}
console.log("If you never switch, you'll have a " + neverSwitchCount/100 + "% chance of winning");
console.log("If you always switch, you'll have a " + alwaysSwitchCount/100 + "% chance of winning");
