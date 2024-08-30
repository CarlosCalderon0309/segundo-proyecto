const express = require('express');
const sequelize = require('./Config/database');
const productRoutes = require('./Routes/productRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/products', productRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(err => console.error('Unable to connect to the database:', err));
