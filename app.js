//app.js
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import itemRoutes from './routes/item';

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true });

app.use('/api/items', itemRoutes);

const morgan = require('morgan');
app.use(morgan('combined', { stream: { write: message => logEvent(message) } }));

app.use('/admin', require('./routes/admin'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
