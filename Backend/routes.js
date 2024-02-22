const express = require('express');
const router = express.Router();

let users = [
    { id: 1, character: 'Tony Stark', movie: 'Iron Man' },
    { id: 2, character: 'Bruce Banner', movie: 'Hulk' }
];
router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1, 
        character : 'Steve Rogers',
        movie: 'Captain America'
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }
    const { character, movie } = req.body;
    users[userIndex].character = character;
    users[userIndex].movie = movie;
    res.json(users[userIndex]);
});

router.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: 'User deleted successfully' });
});

module.exports = router;