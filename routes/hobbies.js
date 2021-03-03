const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.hobbies.index);

router.get('/:id', controllers.hobbies.show)

router.post('/', controllers.hobbies.create)

router.put('/:id', controllers.hobbies.update);

router.delete('/:id', controllers.hobbies.destroy)

//Session Routes Below

router.get('/:id/sessions', controllers.sessions.index);

router.get('/:id/sessions/:seshId', controllers.sessions.show)

router.post('/:id/sessions', controllers.sessions.create)

router.put('/:id/sessions/:seshId', controllers.sessions.update);

router.delete('/:id/sessions/:seshId', controllers.sessions.destroy)

module.exports = router;