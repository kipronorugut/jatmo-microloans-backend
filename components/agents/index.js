const express = require('express');
const mongoose = require('mongoose');
const SalesAgentRoutes = require('./routes/salesAgentRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

// Use Sales Agent routes
app.use('/api', SalesAgentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
