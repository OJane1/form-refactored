const path = require('path');
const FormModel = require('./FormModel');

module.exports.getForm = (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}

module.exports.saveForm = (req, res) => {
    const newMessage = new FormModel({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newMessage.save()
    .then(() => res.sendFile(path.join(__dirname, 'public', 'answer.html')))
    .catch(err => res.status(500).send('Error saving the message'));
}