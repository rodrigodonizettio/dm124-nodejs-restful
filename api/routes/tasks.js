const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

let db = {};
let sequence = 0;

router.get('/', (req, res) => {
        const toArray = key => db[key];
        const tasks = Object.keys(db).map(toArray);

        tasks.length ? res.json(tasks) : res.status(204).end();
});

router.get('/:taskId', (req, res) => {
    const task = db[req.params.taskId];
    task ? res.json(task) : notFound(req, res);
});

router.post('/', checkAuth, (req, res) => {
    const newTask = {
        id: ++sequence,
        done: req.body.done || false,
        description: req.body.description
    }

    db[newTask.id] = newTask;

    res.status(201).json({
        message: `Task has been created`,
        newTask
    });
});

//SAME AS PUT, BUT IT ONLY UPDATES. PUT UPDATES OR CREATES IF THE TASK DOESN'T EXIST
router.patch('/:taskId', checkAuth, (req, res) => {
    const task = db[req.params.taskId];
    const hasDoneValue = req.body.done != null;
    if(task) {
        task.done = hasDoneValue ? req.body.done : task.done;
        task.description = req.body.description || task.description;
        res.json(task);
    } else {
        notFound(req, res);
    }
});

router.delete('/:taskId', checkAuth, (req, res) => {
    const task = db[req.params.taskId];
    if(task) {
        delete db[task.id];
        res.status(200).end();
    } else {
        notFound(req, res);
    }
});

module.exports = router;