const mongoose = require('mongoose');

const InterestReceivableLedgerSchema = new mongoose.Schema({
  loanId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan',
    required: true
  },
  interestAmount: {
    type: Number,
    required: true
  },
  interestRate: {
    type: Number,
    required: true
  },
  interestPeriod: {
    type: Number,
    required: true
  },
  interestStartDate: {
    type: Date,
    required: true
  },
  interestEndDate: {
    type: Date,
    required: true
  },
  interestPaid: {
    type: Number,
    default: 0
  },
  interestPaidDate: {
    type: Date
  },
  interestPaymentRemaining: {
    type: Number
  }
});

const InterestReceivableLedger = mongoose.model('InterestReceivableLedger', InterestReceivableLedgerSchema);

module.exports = InterestReceivableLedger;
