import { modules, students, mentors, classes } from "./hyf.js";

/*
const possibleMentorsForModule = (moduleName) => {


  const teachers = [];
  mentors.forEach((mentor) => {
    if (mentor.canTeach.includes(moduleName)) {
      teachers.push(mentor.name);
    }
  });
  return teachers;
};
*/


 //alternative solution
const possibleMentorsForModule = (moduleName) =>
  mentors
    .filter(m => m.canTeach.includes(moduleName))
    .map(m => m.name);


// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));

const findMentorForModule = (moduleName) => {

  const theChosen = mentors                                     // new array of names
    .filter(m => m.canTeach.includes(moduleName))               // filtered by module
  const index = Math.floor(Math.random() * theChosen.length);   // randon index
  return theChosen[index].name;                                 // name with this index
  
 //alternative solution

  /*const teachers = [];
  mentors.forEach((mentor) => {
    if (mentor.canTeach.includes(moduleName)) {
      teachers.push(mentor.name);
    }
  });
  const index = Math.floor(Math.random() * teachers.length);
  const theChosen = teachers[index];

  return theChosen;
  */
};
// You can uncomment out this line to try your function
  console.log(findMentorForModule('javascript'));
