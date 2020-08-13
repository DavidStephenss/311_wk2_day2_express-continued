const contacts = require('./../data/contacts')
let counter = contacts.length+1


// one function will be list 
const listContact = (req, res) => {
  res.json(contacts)
}
// one function will be create function
const createContact = (req, res) => {
  //bring my counter with me
  contacts.push({_id: counter++, ...req.body})
  res.json(contacts[contacts.length -1])
}
//one function will be update function
const updateContact = (req,res) => {
  let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
  foundContact.name = req.body.name ? req.body.name : foundContact.name
  foundContact.avatar = req.body.avatar ? req.body.avatar : foundContact.avatar
  foundContact.occupation = req.body.occupation ? req.body.occupation : foundContact.occupation
  res.json(foundContact) 
}
// one function will be delete function
const deleteContact = (req, res) => {
  let foundContact = contacts.find( contact => contact._id === parseInt(req.params.userId))
if (foundContact) {
    foundContact.isActive = false
    res.send('${req.params.userId} is gone')
} else {
  res.status(400).json({message: 'no contact with the id of ${req.params.userId}'})
   
  }
}
// one function will be show function
const showContact = (req,res) => {
  let foundContact = contacts.find(contact => contact._id === parseInt(req.params.userId))
  res.json(foundContact)
}


module.exports = {
  listContact,
  createContact,
  updateContact,
  deleteContact,
  showContact
}