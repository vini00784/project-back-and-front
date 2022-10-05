'use strict'

import { getStudentsList, filterStudentsList } from "./studentsListFetch.js"
import { getCourses } from "./coursesFetch.js"
import { createDiv, createImg, createSpan } from "./utils/createElements.js"

const course = localStorage.getItem('course')
const coursesName = await getCourses()

let titleContent = ''
const { courses } = coursesName

courses.forEach(element => {
    if(element.abbreviation.toLowerCase() == course) {
        titleContent = element.name.split('-')[1].replace('Técnico em', '')
    }
});

let { students } = await getStudentsList(course)

const changeTitle = () => {
    const title = document.querySelector('.title')
    title.textContent = titleContent
}

changeTitle()

const createStudentsCards = async (student) => {
    const container = document.querySelector('.content-container')
    const  students  = student

    students.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('student')
        card.id = element.registration
        const image = createImg('student-image', element.image)
        const spanName = createSpan('student-name', element.name)

        if(element.status.toLowerCase() == 'cursando') {
            card.classList.add('card-blue')
        } else if(element.status.toLowerCase() == 'finalizado') {
            card.classList.add('card-yellow')
        }

        card.appendChild(image)
        card.appendChild(spanName)

        container.appendChild(card)

        card.addEventListener('click', (e) => {
            e.preventDefault()

            const student = card.id

            localStorage.setItem('student', student)

            location.href= './student.html'
        })
    })
}

createStudentsCards(students)

const clearCards = () => {
    const cards = document.querySelectorAll('.student')
    cards.forEach((card) => card.remove())
}

const statusFilterSelect = document.querySelector('.status-menu')
let statusSelectValue = document.querySelector('.status-menu').value

statusFilterSelect.addEventListener('change', async () => {
    statusSelectValue = document.querySelector('.status-menu').value
    

    const { students } = await filterStudentsList(course, statusSelectValue.toLowerCase())
    

    clearCards()

    if(students) {
        createStudentsCards(students)
    }
})