const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.hobbies.index);

router.get('/:id', controllers.hobbies.show)

router.post('/', controllers.hobbies.create)

router.put('/:id', controllers.hobbies.update);

router.delete('/:id', controllers.hobbies.destroy)

module.exports = router;