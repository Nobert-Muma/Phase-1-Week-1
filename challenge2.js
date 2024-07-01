/*
Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. 
Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
   This criterion is linked to a Learning OutcomeSpeed Detector
The program takes in speed of a car as input and performs operation with it
 */

// Prompt the user to enter the speed of the car and store it in the speedOfCar variable.
let speedOfCar=prompt("Input the speed of the car:");
// This constant variable stores the speed limit.
const speedLimit=70;
// This variable will store the difference between the car's speed and the speed limit.
let speedOfCarAndSpeedLimitDifference=speedOfCar-speedLimit;
let demeritPointCalculator;
let roundedDemeritPoints;
// This function checks the car's speed and returns a message based on the speed limit.
function speedDetector() {
   speedOfCar = parseInt(speedOfCar);
   if (isNaN(speedOfCar) || speedOfCar < 0) {
      return "Please input a number!.";
   }
   else if (speedOfCarAndSpeedLimitDifference < 5) {
      return "Ok";
   } else if (speedOfCarAndSpeedLimitDifference >= 5 && speedOfCarAndSpeedLimitDifference <= 60) {
      demeritPointCalculator=speedOfCarAndSpeedLimitDifference/5;
      roundedDemeritPoints=Math.floor(demeritPointCalculator);
      return `Points: ${roundedDemeritPoints}`;
   } else if (speedOfCarAndSpeedLimitDifference > 60) {
      return "License suspended";
   } else {
      return "Try again!";
   }
}
// Calling the speedDetector function to check the speed and display the appropriate message
speedDetector();