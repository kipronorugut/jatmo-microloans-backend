const mongoose = require("mongoose");
const { Schema } = mongoose;

const GuarantorLedgerSchema = new Schema({
  loan: { type: Schema.Types.ObjectId, ref: "Loan" },
  guarantor: { type: Schema.Types.ObjectId, ref: "Guarantor" },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ["guarantee", "bonus"] },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GuarantorLedger", GuarantorLedgerSchema);
