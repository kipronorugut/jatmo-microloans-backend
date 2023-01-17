import Borrower from "../models/Borrower";

export const calculateLoanPrice = async (borrowerId, loanAmount, loanTerm) => {
  let interestRate = 0;
  // Get borrower's risk score
  const borrower = await Borrower.findById(borrowerId);
  const riskScore = borrower.riskScore;
  // Calculate interest rate based on risk score
  if (riskScore <= 75) {
    interestRate = 0.05;
  } else if (riskScore > 75 && riskScore <= 90) {
    interestRate = 0.08;
  } else {
    interestRate = 0.12;
  }
  // Calculate loan price
  const loanPrice = loanAmount + loanAmount * loanTerm * interestRate;
  return loanPrice;
};
