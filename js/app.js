const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Import de funções:
const { getAllStudents, getStudentsName, getStudentByCourse } = require('./module/alunos.js')
const { getCoursesName } = require('./module/cursos.js')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    app.use(cors())
    next()
})

app.get('/alunos', cors(), async function(request, response, next) {
    let allStudents = getAllStudents()

    if(allStudents) {
        response.status(200)
        response.json(allStudents)
    } else {
        response.status(404)
    }
})

app.get('/aluno/:matricula', cors(), async function(request, response, next) {
    let registration = request.params.matricula
    let studentsName = getStudentsName(registration)

    if(studentsName) {
        response.status(200)
        response.json(studentsName)
    } else {
        response.status(404)
    }
})

app.get('/alunos/:curso', cors(), async function(request, response, next) {
    let course = request.params.curso

    let studentsByCourse = getStudentByCourse(course)

    if(studentsByCourse) {
        response.status(200)
        response.json(studentsByCourse)
    } else {
        response.status(404)
    }
})

app.get('/cursos', cors(), async function(request, response, next) {
    let coursesName = getCoursesName()

    if(coursesName) {
        response.status(200)
        response.json(coursesName)
    } else {
        response.status(404)
    }
})

app.listen(3333, function() {
    console.log('Server waiting for requests...')
})