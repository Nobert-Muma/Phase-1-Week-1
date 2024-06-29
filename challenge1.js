/*
Challenge 1: Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. 
The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
 */

function studentGradeGenerator() {
    let studentMarks=prompt("Input student marks(between 0 and 100):");
    let grade;
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
        alert('Invalid input! Please try again');
    }
}
studentGradeGenerator();