const { Router } = require('express');
const { getForm, saveForm } = require('./FormController');

const router = Router();

router.get('/', getForm);
router.post('/saveForm', saveForm);


module.exports = router;
