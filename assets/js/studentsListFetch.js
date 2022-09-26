'use strict'

const getStudentsList = async (course) => {
    const url = `http://localhost:3030/alunos/curso/${course}`
    const response = await fetch(url)
    const data = response.json()

    return data
}

export { getStudentsList }