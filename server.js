const express = require('express')
const app = express()
const port = 3000

let o = []

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.setHeader("X-XSS-Protection", 0)
    res.render('index.ejs', {items: o})
})

app.post('/', (req, res) => {
    o.push(req.body.str)
    res.setHeader("X-XSS-Protection", 0)
    res.render('index.ejs', {items: o})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})