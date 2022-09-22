'use strict'

const getStudentsList = async () => {
    const url = 'http://localhost:3030/alunos/curso/:curso'
    const response = await fetch(url)
    const data = response.json()

    return data
}

export { getStudentsList }