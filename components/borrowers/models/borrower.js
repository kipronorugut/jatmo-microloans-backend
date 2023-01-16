import mongoose from 'mongoose';

const { Schema } = mongoose;

const borrowerSchema = new Schema({
    name: String,
    loan_amount: Number,
    loan_term: Number,
    repayment_status: Boolean,
});

export default mongoose.model('Borrower', borrowerSchema);
