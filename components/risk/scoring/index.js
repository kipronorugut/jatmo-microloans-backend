import cron from 'node-cron';
import Loan from '../models/Loan';
import Borrower from '../models/Borrower';

// Cron job to run every day at 12am
cron.schedule('0 0 * * *', async () => {
    console.log('Running risk scoring module...');
    // Get all borrowers
    const borrowers = await Borrower.find();
    borrowers.forEach(async borrower => {
        // Get borrower's loan history
        const loans = await Loan.find({ borrower: borrower._id });
        let riskScore = 0;
        // Calculate risk score based on historical borrowing patterns
        loans.forEach(loan => {
            if (loan.status === 'default') {
                riskScore += 25;
            }
            if (loan.status === 'delinquent') {
                riskScore += 10;
            }
            if (loan.loanAmount > borrower.income * 2) {
                riskScore += 15;
            }
            if (loan.loanTerm > 36) {
                riskScore += 5;
            }
        });
        // Update borrower's risk score
        await Borrower.findByIdAndUpdate(borrower._id, { riskScore });
    });
    console.log('Risk scoring module completed.');
});
