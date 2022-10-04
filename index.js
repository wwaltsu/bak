const { read } = require('feed-reader')

const http = require('http')
const ruuat = read('https://www.foodandco.fi/modules/MenuRss/MenuRss/CurrentWeek?costNumber=3060&language=fi').then(result => console.log(result))

const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(ruuat))
  })

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)