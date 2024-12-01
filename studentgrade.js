//Challenge 1: Student Grade Generator (Toy Problem)
//Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
//A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40

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

function getStudentGrade(marks){ //determines the grade based on the marks.
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

