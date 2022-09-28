'use strict'

const createDiv = (className, id = '') => {
    const div = document.createElement('div');
    div.classList.add(className);
    div.id = id;
    return div
}

const createImg = (className, source) => {
    const img = document.createElement('img')
    img.classList.add(className)
    img.src = source

    return img
}

const createSpan = (className, textContent) => {
    const span = document.createElement('span')
    span.classList.add(className)
    span.textContent = textContent

    return span
}

export { 
    createDiv, 
    createImg, 
    createSpan
}