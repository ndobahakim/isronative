const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'very strong secret here hehehe'; 

const initialData = {
  users: [],
  tasks: [],
};
fs.writeFileSync('data.json', JSON.stringify(initialData), 'utf-8');

app.use(bodyParser.json());

// Middleware to serve static files
app.use(express.static('public'));

// Middleware to verify JWT token and protect routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

// Endpoint to create a new user account
app.post('/signup', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  const { username, password } = req.body;

  // Check if the user already exists
  if (data.users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Create a new user
  const newUser = { username, password };
  data.users.push(newUser);
  fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8');
  res.json({ message: 'Account created successfully' });
});

// Endpoint to log in and provide a JWT token in the response
app.post('/login', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  const { username, password } = req.body;

  const user = data.users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create a JWT token
  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  res.json({ message: 'Login successful', user, token });
});

// Endpoint to add a task, requires authentication
app.post('/tasks', authenticateToken, (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  const { username, taskText } = req.body;

  // Check if the user exists
  const user = data.users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  // Create a new task
  const newTask = { id: data.tasks.length + 1, text: taskText, completed: false };
  data.tasks.push(newTask);

  fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8');
  res.json({ message: 'Task added successfully' });
});

// Endpoint to update task completion status, requires authentication
app.put('/tasks/:taskId', authenticateToken, (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
  const taskId = parseInt(req.params.taskId);
  const { completed } = req.body;

  // Find the task by ID
  const task = data.tasks.find((task) => task.id === taskId);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.completed = completed;

  fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8');
  res.json({ message: 'Task updated successfully' });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
