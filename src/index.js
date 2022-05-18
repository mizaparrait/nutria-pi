const express = require('express')
const path = require('path')

const app = express()

app.listen(3000, () => {
	console.log('Online')
})

app.use(express.json())
app.use(express.static(__dirname + '/templates'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	const options = { root: path.join(__dirname, './public')}
	const fileName = 'index.html'

	res.sendFile(fileName, options)
})

module.exports = app
