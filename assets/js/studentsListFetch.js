'use strict'

const getStudentsList = async (course) => {
    const url = `http://localhost:3030/alunos/curso/?curso=${course}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

const filterStudentsList = async (course, status) => {
    const url = `http://localhost:3030/alunos/curso/?curso=${course}&&status=${status}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export { getStudentsList, filterStudentsList }