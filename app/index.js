const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const { task } = req.body;
    if(!task) return res.status(400).json({ error: "Task is required" });
    todos.push({ task });
    res.status(201).json({ message: "Task added" });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

module.exports = app;
