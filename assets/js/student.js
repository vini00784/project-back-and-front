'use strict'

import { getStudentInfo, getSubjects } from "./studentFetch.js"
import { createDiv, createImg, createSpan } from "./utils/createElements.js"

const registration = localStorage.getItem('student')

let studentInfo = await getStudentInfo(registration)
let studentSubjects = await getSubjects(registration)

const createProfile = (json) => {
    const profileContainer = document.querySelector('.student-profile')

    const { student } = json

    student.forEach(element => {
        const image = createImg('student-image', element.image)
        const studentName = createSpan('student-name', element.name)

        profileContainer.appendChild(image)
        profileContainer.appendChild(studentName)
    })
}

createProfile(studentInfo)

const createSubjectInitials = (name) => {
    let subjectName = name;
    let subjectInitials = [];

    let splitedName = subjectName.split(' ');
    splitedName.forEach(index => {
        // console.log(splitedName);
        subjectInitials.push(index[0].toUpperCase());
        // console.log(index[0].toUpperCase());
        // splitedName = index[0].toUpperCase();
    });

    return subjectInitials.join('');
}

const showScores = (json) => {
    const { subjects } = json
    const scoresContainer = document.querySelector('.scores')
    
    subjects.forEach(element => {
        console.log(element.grade);
        const gradesContainer = createDiv('subject-score')
        const studentGrade = createSpan('student-score', element.grade)
        const progressBar = document.createElement('progress')
        progressBar.classList.add('score-progress')
        progressBar.max = '100'
        progressBar.value = element.grade

        if(element.grade >=70) {
            progressBar.classList.add('approved')
            studentGrade.classList.add('approved-score')
        } else if(element.grade < 70 && element.grade >= 50) {
            progressBar.classList.add('exam')
            studentGrade.classList.add('exam-score')
        } else {
            progressBar.classList.add('disapproved')
            studentGrade.classList.add('disapproved-score')
        }

        const subjectInitials = document.createElement('span')
        subjectInitials.classList.add('subject-initials')
        subjectInitials.textContent = createSubjectInitials(element.name)

        gradesContainer.appendChild(studentGrade)
        gradesContainer.appendChild(progressBar)
        gradesContainer.appendChild(subjectInitials)

        scoresContainer.appendChild(gradesContainer)
    })

}

showScores(studentSubjects)