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
const swagger = require('../swagger-express/index');

app.set('port', (process.env.port || 8097))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))


//跨域
app.all('*',function (req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8098');
	res.header("Access-Control-Allow-Credentials", "true");
	res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie');

	if(req.method=='OPTIONS'){
		res.send(200);/*让options请求快速返回*/
	}else{
		next();
	}
});
//swagger
app.use(swagger.init(app, {
	apiVersion: '1.0',
	swaggerVersion: '1.0',
	basePath: 'http://localhost:' + app.get('port'),
	swaggerURL: '/swagger',
	swaggerJSON: '/api-docs.json',
	swaggerUI: './public/swagger/',
	apis: ['./server/api.js']
}));

app.get('/swagger', function (req, res) {
	const fileName = 'public/swagger/index.html'
	const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
	res.send(html)
})

//wx API
app.use('/wx', api)

app.listen(app.get('port'), function () {
	console.log('Visit http://localhost:' + app.get('port'))
})
