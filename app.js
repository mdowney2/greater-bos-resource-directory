const express = require('express');
const morgan = require('morgan');
const path= require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.render('views/pages/index.html');
})

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});