/**
 * Created by apple on 2017/2/8.
 */

const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const db = require('./db')
const resolve = file => path.resolve(__dirname, file)
const api = require('./api')
const app = express()

// const createBundleRenderer = require('vue-server-renderer').createBundleRenderer
app.set('port', (process.env.port || 8097))
// app.use(favicon(resolve('../dist/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/wx', api)
app.use('/dist', express.static(resolve('../dist')))

app.get('*', function (req, res) {
	const fileName = 'index.html'
	const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
	res.send(html)
})

app.listen(app.get('port'), function () {
	console.log('Visit http://localhost:' + app.get('port'))
})
