const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const cors = require('cors');
const mime = require('mime-types');
const app = express();

app.use(express.json());
app.use(cors());

const isValidBase64File = (base64String) => {
    if (!base64String) return false;
    const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    return !!matches;
};

const getFileSizeInKB = (base64String) => {
    if (!base64String) return 0;
    const fileBuffer = Buffer.from(base64String, 'base64');
    return Math.ceil(fileBuffer.length / 1024);
};


app.get("/user", async (req, res) => {
    return res.json({ 
        usename: 'kpvishnusai',
        password: 'Vish@1111',
        name: 'KAMSALA PALLAVALI VISHNU SAI',
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
