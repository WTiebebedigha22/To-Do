const express = require('express');
const {createToDo,getAllToDo,deleteToDo,updateToDo} = require('../controllers/toDoController');
const authenticateToken = require('../middleware/authJwt');
const router = express.Router();

router.post('/createToDo',authenticateToken,createToDo)
router.get('/get-all-to-do/:userId',authenticateToken,getAllToDo);
router.delete('/delete-to-do/:id',authenticateToken,deleteToDo);
router.patch('/patch-to-do/:id',authenticateToken,updateToDo);


module.exports = router;