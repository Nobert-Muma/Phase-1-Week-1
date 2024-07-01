/*
Challenge 1: Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. 
The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
 */

function studentGradeGenerator() {
    //Prompt the user to enter student marks
    let studentMarks=prompt("Input student marks(between 0 and 100):");
    //Variable to store the grade
    let grade;
    //if...else if statements to determine the grade the student has based on the marks the student has scored 
    if (studentMarks > 79 && studentMarks < 100) {
        grade="A";
        return grade;
    } else if (studentMarks >= 60 && studentMarks <= 79) {
        grade="B";
        return grade;
    } else if (studentMarks >= 50 && studentMarks <= 59) {
        grade="C";
        return grade;
    } else if (studentMarks >= 40 && studentMarks <= 49) {
        grade="D";
        return grade;
    } else if (studentMarks >= 1 && studentMarks < 40) {
        grade="E";
        return grade;
    } else {
        //For marks outside the 0 to 100 range
        alert('Invalid input! Please try again');
    }
}
//Calling the function so as to make it run
studentGradeGenerator();