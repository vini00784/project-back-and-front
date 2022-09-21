'use strict'

import { getCourses } from "./coursesFetch.js"

let courses = await getCourses()

const createCards = async (json) => {
    const container = document.getElementById('courses')
    const div = document.createElement('a')
    div.classList.add('course-content')
    div.innerHTML = `
        <img src="${json.icone}"></img>
        <span></span>
    `

    container.appendChild(div)
}

createCards(courses)