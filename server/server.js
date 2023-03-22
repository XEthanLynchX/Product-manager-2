const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

const AllMyProductRoutes = require('./routes/products.routes');
AllMyProductRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));