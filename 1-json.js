//this is all about creating, managing and reading json

const fs = require('fs') 
/*
const book = {
    title: 'ego is the enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book) //stringified the book obj for json format
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON) //parsing the json and finding an attribute/coverts to object
console.log(parsedData.author)
fs.writeFileSync('1-json.json', bookJSON)//created 1-json.json
*/
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)