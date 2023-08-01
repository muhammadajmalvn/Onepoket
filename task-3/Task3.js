//Node.js script that reads a text file named "data.txt" and counts the number of words in it, print the total word count to the console.
const fs = require('fs')

function fileWordsCount(filename){
    fs.readFile(filename,'utf8', function(err,data){
        if (err) {
            console.log('error reading data',err)
        }
        const wordCount = data.split(/\s+/).length
        console.log(`The number of words in file ${filename} is:`,wordCount)
    })
}
fileWordsCount('data.txt')

