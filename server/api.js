/**
 * Created by apple on 2017/2/8.
 */

const express = require('express')
const router = express.Router()
const db = require('./db')
const fn = () => {}

router.post('/sendMessage', (req, res) => {
	new db.SendMessage(req.body)
		.save()
		.then(() => {
			res.status(200).send({code: 200, message: 'post成功'})
		})
		.catch(() => res.status(500).end())
})

module.exports = router
