'use strict'

import { getStudentsList } from "./studentsListFetch.js"
import { getCourses } from "./coursesFetch.js"
import { createDiv } from "./utils/createElements.js"

const course = localStorage.getItem('course')
const coursesName = await getCourses()

let titleContent = ''
const { courses } = coursesName

courses.forEach(element => {
    if(element.abbreviation.toLowerCase() == course) {
        titleContent = element.name.split('-')[1].replace('Técnico em', '')
    }
});

let studentsList = await getStudentsList(course);

const changeTitle = () => {
    const title = document.querySelector('.title')
    title.textContent = titleContent
    
}

changeTitle()

const createStudentsCards = async (json) => {
    const container = document.querySelector('.content-container')
    const cardsContainer = createDiv('cards-container')
    const { courses } = json

    if(courses.status.toLowerCase() == 'cursando') {
        cardsContainer.classList.add('card-yellow')
    } else if(courses.status.toLowerCase() == 'finalizado') {
        cardsContainer.classList.add('card-blue')
    }
    container.appendChild(cardsContainer)
}

createStudentsCards(studentsList)