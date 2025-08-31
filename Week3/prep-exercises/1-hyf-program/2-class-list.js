import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {

      // нахожу через класс(массив) текущий модуль // find current module through classes
  const moduleName = classes.find((c) => c.name === className).currentModule;
  // console.log (moduleName);

  
  const studentNames = students                 //find student's name
    .filter(s => s.class === className)
    .map(s => ({name: s.name, role: "student" }));
    // console.log (studentNames);
    
  const teacherNames = mentors                    //find mentor's name
    .filter(m => m.nowTeaching === moduleName)
    .map(m => ({name: m.name, role: "mentor" }));
    // console.log (teacherNames);

  if (studentNames.length === 0) studentNames.push({ name: "NO student", role: "student" });
  if (teacherNames.length === 0) teacherNames.push({ name: "No mentor", role: "mentor" });

  return [...studentNames, ...teacherNames]

};
// You can uncomment out this line to try your function
console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => {
  const activeClasses = classes                //make array of classes name
    .filter(a => a.active)
    .map(s => s.name);
    //  console.log (activeClasses);
    
  const finalAnswer = {}
  for (let numberClass of activeClasses){
    finalAnswer[numberClass] = getPeopleOfClass(numberClass);
  }

  return finalAnswer;
// console.log(activeMentors);
 
};



// You can uncomment out this line to try your function
console.log(getActiveClasses());
