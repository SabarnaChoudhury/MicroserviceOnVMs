const express = require('express');
const app = express();

// Sample data
const users = [
    { id: 1, name: 'Sabarna', role: 'Software Engineer' },
    { id: 2, name: 'Rimashree', role: 'Lawyer' },
    { id: 3, name: 'Narottam', role: 'Teacher' },
    { id: 4, name: 'Kakali', role: 'Main' }
];

app.get('/', (req, res) => res.send('Hello Sabarna, I\'m speaking from VM2!'));

// Fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Fetch a specific user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(5000, '0.0.0.0', () => console.log('Microservice running on port 5000'));
