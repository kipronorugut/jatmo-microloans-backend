const mongoose = require('mongoose');
const ProvisionForDoubtfulDebtsSchema = new mongoose.Schema({
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan',
    required: true
  },
  borrowerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Borrower',
    required: true
  },
  guarantorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guarantor',
    required: true
  },
  provisionAmount: {
    type: Number,
    required: true
  },
  defaultDate: {
    type: Date,
    required: true
  },
  recoveryAmount: {
    type: Number,
    required: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ProvisionForDoubtfulDebts', ProvisionForDoubtfulDebtsSchema);
