const router = require('express').Router();
const controllers = require('../controllers');



router.get('/', controllers.sessions.index);

router.get('/:id', controllers.sessions.show)

router.post('/', controllers.sessions.create)

router.put('/:id', controllers.sessions.update);

router.delete('/:id', controllers.sessions.destroy)

module.exports = router;