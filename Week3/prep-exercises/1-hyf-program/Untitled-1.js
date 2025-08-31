import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
    const existingClass = classes.find((c) => c.name === className);
    if (!existingClass) {
        return;
    }

    // find the current module for this class (only if active)
    const currentModule = existingClass.active && existingClass.currentModule;

    // get all students of this class
    const currentStudents = students
        .filter((student) => student.class === className)
        .map((student) => {
            return {
                name: student.name,
                role: "student",
            };
        });

    // get mentors teaching this module
    const currentMentors = mentors
        .filter((mentor) => mentor.nowTeaching.includes(currentModule))
        .map((mentor) => {
            return {
                name: mentor.name,
                role: "mentor",
            };
        });

    return [...currentStudents, ...currentMentors];
}