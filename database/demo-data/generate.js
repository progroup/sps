var fs = require('fs')
var data = require('./index.js')

var json = JSON.stringify(data)
console.log(json)

fs.writeFile('./mock-data.json', json, function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Mock data generated.')
  }
})
