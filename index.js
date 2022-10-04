const http = require('http')
const ruuat = 'https://www.foodandco.fi/modules/MenuRss/MenuRss/CurrentWeek?costNumber=3060&language=fi' 

const { parse } = require('rss-to-json');
// async await
(async () => {

    var rss = await parse('https://www.foodandco.fi/modules/MenuRss/MenuRss/CurrentWeek?costNumber=3060&language=fi');

    console.log(JSON.stringify(rss, null, 3));

    const app = http.createServer((request, response) => {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(rss))
    }) 
    
    const PORT = 3001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)
    
})();


