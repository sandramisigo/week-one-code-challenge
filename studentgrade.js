
getStudentMarks();

function getStudentMarks(){
    let marks = prompt("Enter the student marks");

    if(isNaN(marks)){
        alert("Please enter a valid number")
        getStudentMarks();
    }else{
        alert(getStudentGrade(marks));
    }
}

function getStudentGrade(marks){
    if(marks >79 && marks <=100){
        return "A";
    }else if(marks >= 60 && marks <= 79){
        return "B";
    }else if(marks>49 && marks <=59) {
        return "C"
    }else if(marks >=40 && marks <=49) {
        return "D"
    }
    else if(marks < 0 || marks > 100){
        return "Please enter valid marks"
    }
    return "E"
}

