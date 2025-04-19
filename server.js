const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}

app.post('/api', (req, res) => {
    const id = 'pets';
    const filePath = path.join(DATA_DIR, `${id}.json`);
    
    fs.writeFile(filePath, JSON.stringify(req.body), err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create blob' });
        }
        
        res.setHeader('Location', `/api/${id}`);
        res.status(201).json({ id });
    });
});

app.get('/api/:id', (req, res) => {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.status(404).json({ error: 'Blob not found' });
            }
            return res.status(500).json({ error: 'Failed to read blob' });
        }
        
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (e) {
            res.status(500).json({ error: 'Invalid JSON data' });
        }
    });
});

app.put('/api/:id', (req, res) => {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    
    fs.writeFile(filePath, JSON.stringify(req.body), err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update blob' });
        }
        
        res.sendStatus(200);
    });
});

app.delete('/api/:id', (req, res) => {
    const filePath = path.join(DATA_DIR, `${req.params.id}.json`);
    
    fs.unlink(filePath, err => {
        if (err) {
            if (err.code === 'ENOENT') {
                return res.status(404).json({ error: 'Blob not found' });
            }
            return res.status(500).json({ error: 'Failed to delete blob' });
        }
        
        res.sendStatus(204);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});