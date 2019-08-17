const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message : 'Handling GET requests to /tasks'
    });
});

router.get('/:taskId', (req, res) => {
    const id = req.params.taskId;
    res.status(200).json({
        message : `GET received Task ID: ${ id } was fetched`
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        message : 'Handling POST requests to /tasks'
    });
});

module.exports = router;