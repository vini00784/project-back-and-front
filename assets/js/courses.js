'use strict'

import { getCourses } from "./coursesFetch.js"

let data = await getCourses()

const createCards = async (json) => {
    const container = document.getElementById('courses')

    const { courses } = json

    courses.forEach(element => {
        const div = document.createElement('a')
        div.classList.add('course-content')
    
        const img = document.createElement('img')
        img.classList.add('course-icon')
        img.src = element.icon

        const span = document.createElement('span')
        span.classList.add('course-name')
        span.textContent = element.abbreviation

        div.appendChild(img)
        div.appendChild(span)
        div.id = element.abbreviation.toLowerCase()
        
        container.appendChild(div)

        div.addEventListener('click', (el) => {
            el.preventDefault()
            const course = div.id

            localStorage.setItem('course', course)

            location.href = './assets/pages/students-list.html'
        })
    });
}

createCards(data)