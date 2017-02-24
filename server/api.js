/**
 * Created by apple on 2017/2/8.
 */

const express = require('express')
const router = express.Router()
const db = require('./db')
const fn = () => {}

/**
 * @swagger
 * resourcePath: /apiJs
 * description: All about API
 */

/**
 * @swagger
 * path: /login
 * operations:
 *   -  httpMethod: POST
 *      summary: Login with username and password
 *      notes: Returns a user based on username
 *      responseClass: User
 *      nickname: login
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: username
 *          description: Your username
 *          paramType: query
 *          required: true
 *          dataType: string
 *        - name: password
 *          description: Your password
 *          paramType: query
 *          required: true
 *          dataType: string
 */
router.post('/sendMessage', (req, res) => {
	new db.SendMessage(req.body)
		.save()
		.then(() => {
			res.status(200).send({code: 200, message: 'post成功'})
		})
		.catch(() => res.status(500).end())
})

/**
 * @swagger
 * models:
 *   User:
 *     id: User
 *     properties:
 *       username:
 *         type: String
 *       password:
 *         type: String
 */

module.exports = router
