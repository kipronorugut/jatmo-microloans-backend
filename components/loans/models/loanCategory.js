import mongoose, { Schema } from "mongoose";

const loanCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  minAmount: {
    type: Number,
    required: true,
  },
  maxAmount: {
    type: Number,
    required: true,
  },
  minTerm: {
    type: Number,
    required: true,
  },
  maxTerm: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  penaltyRate: {
    type: Number,
    required: true,
    min: 0,
    max: 1,
  },
  applicationFee: {
    type: Number,
    min: 0,
  },
  originationFee: {
    type: Number,
    min: 0,
  },
  processingFee: {
    type: Number,
    min: 0,
  },
  disbursementFee: {
    type: Number,
    min: 0,
  },
  prepaymentFee: {
    type: Number,
    min: 0,
  },
  latePaymentPenalty: {
    type: Number,
    min: 0,
  },
  overduePenalty: {
    type: Number,
    min: 0,
  },
  defaultPenalty: {
    type: Number,
    min: 0,
  },
  rolloverPenalty: {
    type: Number,
    min: 0,
  },
  nonSufficientFundsPenalty: {
    type: Number,
    min: 0,
  },
});

const LoanCategory = mongoose.model("LoanCategory", loanCategorySchema);

export default LoanCategory;
