/**
 * Created by apple on 2017/2/8.
 */

const mongoose = require('mongoose')
const init = require('./init.json')
const Schema = mongoose.Schema

const sendMessage = new Schema({
	name: String,
	pwd: String
})

const Models = {
	SendMessage: mongoose.model('SendMessage', sendMessage)
}

mongoose.connect('mongodb://127.0.0.1:27000/monitoringSystem')
// mongoose.set('debug', true)

const db = mongoose.connection

db.on('error', function () {
	console.log('Database connection error.')
})

db.once('open', function () {
	console.log('The database has connected.')
	// initialize()
})

module.exports = Models