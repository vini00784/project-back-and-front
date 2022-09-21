'use strict'

// Função para o get dos cursos
const getCourses = async () => {
    const url = 'http://localhost:3030/cursos'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export { getCourses }