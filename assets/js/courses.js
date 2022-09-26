'use strict'

import { getCourses } from "./coursesFetch.js"
import { createDiv, createImg, createSpan } from './utils/createElements.js'
let data = await getCourses()



const createCards = async (json) => {
    const container = document.getElementById('courses')

    const { courses } = json

    courses.forEach(element => {

        const div = createDiv('course-content', element.abbreviation.toLowerCase())
    
        const img = createImg('course-icon', element.icon)

        const span = createSpan('course-name', element.abbreviation.toUpperCase())

        div.appendChild(img)
        div.appendChild(span)
        
        container.appendChild(div)

        div.addEventListener('click', (e) => {
            e.preventDefault()

            const course = div.id

            localStorage.setItem('course', course)

            location.href = './assets/pages/students-list.html'
        })
    });
}



createCards(data)