const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Tasks have been fetched'
    });
});

router.get('/:taskId', (req, res) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: `GET received Task ID: ${id} was found`
    });
});

router.post('/', checkAuth, (req, res) => {
    res.status(201).json({
        message: `Task has been created`
    });
});

//SAME AS PUT, BUT IT ONLY UPDATES. PUT UPDATES OR CREATES IF THE TASK DOESN'T EXIST
router.patch('/:taskId', checkAuth, (req, res) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: `PATCH received Task ID: ${id} was fetched`
    });
});

router.delete('/:taskId', checkAuth, (req, res) => {
    const id = req.params.taskId;
    res.status(200).json({
        message: `DELETE received Task ID: ${id} was fetched`
    });
});

module.exports = router;