'use strict'

const getStudentInfo = async (registration) => {
    const url = `https://api-lions-school.netlify.app/.netlify/functions/api/aluno/${registration}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const getSubjects = async (registration) => {
    const url = `https://api-lions-school.netlify.app/.netlify/functions/api/disciplinas/aluno/${registration}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export {
    getStudentInfo,
    getSubjects
}