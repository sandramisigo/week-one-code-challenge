
getStudentMarks();

function getStudentMarks(){
    let marks = prompt("Enter the student marks between 0 - 100."); //asks the user to enter the marks

    if(isNaN(marks)){ //if the value entered is not a number, the user is prompted to try again
        alert("Please enter a valid number")
        getStudentMarks();
    }else{
        alert(getStudentGrade(marks)); //display the grades
    }
}

function getStudentGrade(marks){ //determines the grade based on the marks
    if(marks >79 && marks <=100){
        return "A";
    }else if(marks >= 60 && marks <= 79){
        return "B";
    }else if(marks>49 && marks <=59) {
        return "C"
    }else if(marks >=40 && marks <=49) {
        return "D"
    }else if(marks >= 0 && marks <40){
        return "E"
    }
    else {
        return "Please enter valid marks"
    }
    
}

