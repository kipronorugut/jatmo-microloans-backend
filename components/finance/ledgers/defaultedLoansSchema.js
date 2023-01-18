const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const defaultedLoansSchema = new Schema({
  loanId: { type: String, required: true },
  borrowerId: { type: String, required: true },
  guarantorId: { type: String, required: true },
  defaultAmount: { type: Number, required: true },
  defaultDate: { type: Date, required: true },
  recoveryAmount: { type: Number },
  recoveryDate: { type: Date },
  status: { type: String, required: true }
});

module.exports = mongoose.model('DefaultedLoans', defaultedLoansSchema);
