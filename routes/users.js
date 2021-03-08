const router = require('express').Router();
const controllers = require('../controllers');

router.get('/logout', controllers.users.logout)

router.get('/', controllers.users.index);

router.get('/:id', controllers.users.show)

router.post('/', controllers.users.create)

router.put('/:id', controllers.users.update);

router.delete('/:id', controllers.users.destroy)

router.post('/login', controllers.users.login)




module.exports = router;