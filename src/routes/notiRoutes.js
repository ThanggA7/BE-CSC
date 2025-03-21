const express = require('express');
const router = express.Router();
const notiController = require('../controllers/notiController');

router.post('/create', notiController.createNoti);

router.get('/:slug', notiController.getNoti);

router.delete('/:slug', notiController.deleteNoti);

router.put('/:slug', notiController.updateNoti);

module.exports = router;
