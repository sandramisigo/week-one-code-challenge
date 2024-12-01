//Challenge 2: Speed Detector (Toy Problem)
//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”.
//Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//> For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.



function checkSpeed(speed){      //function to check speed
    const speedLimit = 70;       //sets speed limit to 70
    const kmPerPoint = 5;        //sets km per point to equal 5

    if (speed <= speedLimit){     //if speed is less than or equal to 70, it should return "OK"
        return ("OK");
    } else {
const points = Math.floor(speed - speedLimit) / kmPerPoint; //demerit points
        
        if (points > 12){
            return("License Suspended");  //if points are more than 12, the drivers license is suspended.
        } else{
            return(`Points:${points}`);
        }
    }
}
//to check whether our function is working properly, console.log random speed.
console.log(checkSpeed(70))
console.log(checkSpeed(90))