const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/logsDB', { useNewUrlParser: true });

const LogsSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  log: String
});
const Logs = mongoose.model('Logs', LogsSchema);
