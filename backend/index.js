const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend läuft!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
