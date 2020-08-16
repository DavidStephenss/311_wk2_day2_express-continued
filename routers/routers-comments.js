const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/controllers-comments')

router.get('/comments', commentsController.listComments)
router.post('/comments', commentsController.createComment)
router.put('/comments/:commentsId', commentsController.updateComment)
router.delete('/comments:commentsId', commentsController.deleteComment)
router.get('/comments/:commentsId', commentsController.singleComment)

module.exports = router