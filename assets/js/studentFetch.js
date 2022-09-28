'use strict'

const getStudentInfo = async (registration) => {
    const url = `http://localhost:3030/aluno/${registration}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const getSubjects = async (registration) => {
    const url = `http://localhost:3030/disciplinas/aluno/${registration}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export {
    getStudentInfo,
    getSubjects
}