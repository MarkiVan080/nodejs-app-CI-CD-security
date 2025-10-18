const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static HTML from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Todos API
let todos = [
  { id: 1, task: "Learn DevSecOps" },
  { id: 2, task: "Set up Docker pipeline" }
];

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
