var myNumber = 1;
while (myNumber <= 5) {
  console.log(myNumber);
  myNumber++;
}

var trainsOperational = 10;
var trainNumber = 1;
while (trainNumber <= trainsOperational) {
  console.log("Train #" + trainNumber + " is running.");
  trainNumber++;
}


var num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}

var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
while (monthNumber <= monthsToPrint) {
	numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
  monthNumber++;
}

for(var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++){
  console.log("Train #" + trainNumber + " is running");
}

for(myNum = 5; myNum >=1; myNum--){
  console.log(myNum);
}


var operationalTrains = 8;
var totalTrains = 12;
for(var stoppedTrains = operationalTrains + 1; stoppedTrains <= totalTrains; stoppedTrains++){
  console.log("Train #" + stoppedTrains + " is not running");
}
