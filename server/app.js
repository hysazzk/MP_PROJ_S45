const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3677;

// Configurar Handlebars
app.engine('hbs', exphbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a landing page
app.get('/', (req, res) => {
    res.render('index', { title: 'Grayscale - Start Bootstrap Theme' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
