'use strict'

const getStudentsList = async (course) => {
    const url = `http://localhost:3030/alunos/curso/${course}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const getStudentsByStatus = async (course) => {
    
}

export { getStudentsList }