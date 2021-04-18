const path = require('path')
const express = require('express')
const router = express.Router()
const classList = require('./classList.js') // our class list array

// RESTful
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/api/list', function (req, res) {
  res.json(classList.list()) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /get/0 once you've added some entries
})

/** **************************************************** */
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.post('/api/create', function (req, res) {
  console.log('Creating the following student:', req.body.student)
  classList.add({ name: req.body.student, stdnum: req.body.stdnum, course: req.body.course })
  res.redirect(req.baseUrl + '/api/list')
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})
router.post('/api/delete', function (req, res) {
  console.log('deleting a student entry')
  classList.delete(req.body.id)
  res.redirect(req.baseUrl + '/api/list')
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})
router.post('/api/edit', function (req, res) {
  console.log('editing a student entry', req.body.course)
  // if (req.body.student !== '') {
  //   console.log('editing the name')
  //   classList[req.body.id].name = req.body.student
  // }
  // if (req.body.course !== '') {
  //   console.log('editing the course')
  //   classList[req.body.id].course = req.body.course
  // }
  // if (req.body.course === '' && req.body.student === '') {
  //   const temp = classList[req.body.id]
  //   console.log('removing a course')
  //   classList.splice(req.body.id, 1, { name: temp.name, stdnum: temp.stdnum })
  // }
  const stud = { name: req.body.student, stdnum: classList.get(req.body.id).stdnum, course: req.body.course }
  classList.edit(stud, req.body.id)

  res.redirect(req.baseUrl + '/api/list')
})
/** ******************************* */

module.exports = router
