'use strict'

// Função para o get dos cursos
const getCourses = async () => {
    const url = 'https://api-lions-school.netlify.app/.netlify/functions/api/cursos'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export { getCourses }