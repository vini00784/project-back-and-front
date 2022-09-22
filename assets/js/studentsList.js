'use strict'

import { getStudentsList } from "./studentsListFetch.js"

let studentsList = await getStudentsList()

const courses = localStorage.getItem('course')

const card = () => {
    const container = document.createElement('div')
}

const createCards = () => {
    
}

createCards(courses)