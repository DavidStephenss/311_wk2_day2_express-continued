const comments = require('../data/comments')
let counter = comments.length+1

const listComments = (req, res) => {
  res.json(comments)
}

const createComment = (req, res) => {
comments.push({_id: counter++, ...req.body});
  res.json(comments[comments.length-1])
}

const updateComment = (req, res) => {
  findComment = comments.find( comment => comment._id === parseInt(req.params.commentsId))
  findComment.body = req.body.body ? req.body.body : findComment.body
  findComment.postId = req.body.postId ? req.body.postId : findComment.postId
  res.json(findComment)
}

const deleteComment = (req, res) => {
  let findComment = comments.find( comment => comment._id === parseInt (req.params.commentsId))
  if (findComment) {
    findComment.isActive = false
    res.send("fix ya stuff brahh")
  } else {
    res.status(400).json({message: 'sheeeesh see ya ${req.params.commentsId}'})
  }
}

const singleComment = (req, res) => {
    let findComment = comments.find( comment => comment._id === parseInt(req.params.id))
    res.json(findComment)
}


modules.exports = {
  listComments,
  createComment,
  updateComment,
  deleteComment,
  singleComment

}