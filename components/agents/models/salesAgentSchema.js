const mongoose = require('mongoose');

const SalesAgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  loansSold: {
    type: Number,
    default: 0
  },
  commissionEarned: {
    type: Number,
    default: 0
  },
  bonusEarned: {
    type: Number,
    default: 0
  },
  guarantorBonusEarned: {
    type: Number,
    default: 0
  },
  loanFee: {
    type: Number,
    default: 0
  },
  bonus: {
    type: Number,
    default: 0
  },
  guarantorBonus: {
    type: Number,
    default: 0
  },
  quota: {
    type: Number,
    default: 0
  },
  target: {
    type: Number,
    default: 0
  },
  reviewPeriod: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'active'
  },
  loans: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = SalesAgent = mongoose.model('salesAgent', SalesAgentSchema);
