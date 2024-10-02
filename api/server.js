const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./crowdfunding_db.js');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5501',
    credentials: true
}));

const port = 3000;

app.use(bodyParser.json());

app.get('/fundraisers', (req, res) => {
    const query = `
    SELECT f.*, c.NAME as CATEGORY_NAME 
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.ACTIVE = 1
  `;
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.get('/hot', (req, res) => {
    const query = 'SELECT * FROM FUNDRAISER WHERE ACTIVE = 1'
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    })
})

app.get('/categories', (req, res) => {
    const query = 'SELECT * FROM CATEGORY';
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.get('/search', (req, res) => {
    const { category, city, keyword } = req.query;
    console.log(category, city, keyword);
    
    let query = `
    SELECT f.*, c.NAME as CATEGORY_NAME 
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.ACTIVE >= 1
  `;
    const queryParams = [];

    if (category !== 'undefined') {
        query += ' AND c.CATEGORY_ID = ?';
        queryParams.push(category);
    }
    if (city !== 'undefined') {
        query += ' AND f.CITY LIKE ?';
        queryParams.push(city);
    }
    if (keyword !== 'undefined') {
        query += ' AND f.CAPTION LIKE ? OR f.ORGANIZER LIKE ?';
        queryParams.push(keyword, keyword);
    }
    console.log(query);
    
    connection.query(query, queryParams, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
});

app.get('/fundraiser/:id', (req, res) => {
    const { id } = req.params;
    const query = `
    SELECT f.*, c.NAME as CATEGORY_NAME 
    FROM FUNDRAISER f
    JOIN CATEGORY c ON f.CATEGORY_ID = c.CATEGORY_ID
    WHERE f.FUNDRAISER_ID = ?
  `;
    connection.query(query, [id], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Database error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Fundraiser not found' });
        } else {
            res.json(results[0]);
        }
    });
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/image/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.sendFile(path.join(__dirname, 'images', imageName));
});

app.listen(port, () => {
    console.log(`http://localhost:${port}服务启动成功！`);
});