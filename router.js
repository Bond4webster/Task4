const express = require('express');

const UserController = require('./controller');
const user_controller = new UserController();

const router = new express.Router();

router.get('/User',user_controller.getAllUsers);
router.get('/User/:id',user_controller.getUser);
router.post('/User',user_controller.addUser);
router.put('/User/:id',user_controller.updateUser);
router.delete('/User/:id',user_controller.deleteUser);

module.exports = router;