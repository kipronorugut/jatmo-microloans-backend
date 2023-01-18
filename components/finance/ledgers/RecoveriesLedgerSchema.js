/**
 * A Recoveries Ledger is used to track the amount of money recovered from defaulted loans. The schema would include fields such as the loan ID, recovery amount, recovery date, and any additional notes or comments. It would also include a reference to the loan model, so that the recovery can be linked to the original loan.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecoveriesLedgerSchema = new Schema({
  loanId: { type: Schema.Types.ObjectId, ref: "Loan" },
  defaultDate: Date,
  recoveryAmount: { type: Number, required: true },
  recoveryDate: { type: Date, default: Date.now },
  recoveryMethod: { type: String, required: true },
  notes: { type: String },
  guarantorId: { type: Schema.Types.ObjectId, ref: "Guarantor" },
});
const RecoveriesLedger = mongoose.model(
  "RecoveriesLedger",
  recoveriesLedgerSchema
);

module.exports = RecoveriesLedger;
