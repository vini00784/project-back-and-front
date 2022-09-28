'use strict'

import { getStudentInfo, getSubjects } from "./studentFetch.js"
// import createSubjectInitials from './utils/createInitials.js';
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

const showScores = (json) => {
    const { subjects } = json
    const scoresContainer = document.querySelector('.scores')
    
    subjects.forEach(element => {
        console.log(element.media);
        const gradesContainer = createDiv('subject-score')
    })

}

showScores(studentSubjects)