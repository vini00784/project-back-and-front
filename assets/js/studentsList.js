'use strict'

import { getStudentsList, filterStudentsList, getYears } from "./studentsListFetch.js"
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
const clearYearOptions = () => {
    const option = document.querySelectorAll('.year-option')
    option.forEach((option) => option.remove())
}

const statusFilterSelect = document.querySelector('.status-menu')
let statusSelectValue = document.querySelector('.status-menu').value
const yearsFilterSelect = document.querySelector('.conclusion-year-menu')
let yearsSelectValue = document.querySelector('.conclusion-year-menu')

const createYearsOption = async (year) => {
    const yearOption = document.createElement('option')
    yearOption.value = year
    yearOption.textContent = year
    yearOption.classList.add('year-option')

    yearsFilterSelect.appendChild(yearOption)
}

const { years } = await getYears(course, statusSelectValue)
years.forEach(item => createYearsOption(item))

statusFilterSelect.addEventListener('change', async () => {
    statusSelectValue = document.querySelector('.status-menu').value
    yearsSelectValue = document.querySelector('.conclusion-year-menu').value
    

    const { students } = await filterStudentsList(course, statusSelectValue.toLowerCase(), yearsSelectValue)
    years = await getYears(course, statusSelectValue) // Trocar isso aqui pois a variável está definida como constante
    clearYearOptions()

    years.forEach(item => createYearsOption(item))
    // createYearsOption(years)
    

    clearCards()

    if(students) {
        createStudentsCards(students)
    }
})

yearsFilterSelect.addEventListener('change', async () => {
    yearsSelectValue = document.querySelector('.conclusion-year-menu').value
    statusSelectValue = document.querySelector('.status-menu').value

    const { students } = await filterStudentsList(course, statusSelectValue.toLowerCase(), yearsSelectValue)
    
    clearCards()
    
    students.forEach(item => {
        createStudentsCards(item)
    })
    
})