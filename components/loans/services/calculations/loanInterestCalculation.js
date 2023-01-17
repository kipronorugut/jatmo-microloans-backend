import cron from "node-cron";
import Loan from "./models/Loan";
import LoanCategory from "./models/LoanCategory";

export const loanInterestCalculation = () => {
  cron.schedule("0 9 * * *", async () => {
    const loans = await Loan.find({ loanStatus: "active" });
    loans.forEach(async (loan) => {
      const loanCategory = await LoanCategory.findById(loan.loanCategory);
      // calculate interest
      const interest = (loan.loanAmount * loanCategory.interestRate) / 365;
      // calculate penalty
      const penalty = (loan.loanAmount * loanCategory.penaltyRate) / 365;
      // calculate loan fee
      const loanFee = loan.loanAmount * loanCategory.loanFee;

      // update loan with interest, penalty, and loan fee
      await Loan.findByIdAndUpdate(loan._id, {
        $inc: {
          interest,
          penalty,
          loanFee,
        },
      });
    });
  });
};
