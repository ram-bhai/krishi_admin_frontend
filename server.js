const express = require("express");
const path = require("path");
const app = express();
app.use(express.static('./dist/Frontend_Admin'));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'dist/Frontend_Admin/src' })
});
app.use((req, res) => {
    res.sendFile('index.html', { root: 'dist/Frontend_Admin/src' });
});
app.listen(process.env.PORT || 8080);