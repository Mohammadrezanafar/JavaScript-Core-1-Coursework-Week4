/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

let groupIsOnlyStudents = students.concat(group); // complete this statement

if (groupIsOnlyStudents == group) {
   console.log("The group contains only students");
} else {
   console.log("The group does not contain only students");
}
/* EXPECTED RESULT */

// The group does not contain only students
