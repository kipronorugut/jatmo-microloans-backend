const mongoose = require('mongoose');
const Loan = require('./models/Loan');
const moment = require('moment');

const calculateKPIs = async () => {
  // calculate loan application rate
  const totalLoanApplications = await Loan.countDocuments();
  const totalApprovedApplications = await Loan.countDocuments({ status: 'approved' });
  const loanApplicationRate = (totalApprovedApplications / totalLoanApplications) * 100;

  // calculate loan approval rate
  const totalLoanApprovals = await Loan.countDocuments({ status: 'approved' });
  const loanApprovalRate = (totalLoanApprovals / totalLoanApplications) * 100;

  // calculate loan repayment rate
  const totalRepaidLoans = await Loan.countDocuments({ status: 'repaid' });
  const loanRepaymentRate = (totalRepaidLoans / totalLoanApprovals) * 100;

  // calculate loan default rate
  const totalDefaultedLoans = await Loan.countDocuments({ status: 'defaulted' });
  const loanDefaultRate = (totalDefaultedLoans / totalLoanApprovals) * 100;

  // calculate loan delinquency rate
  const totalDelinquentLoans = await Loan.countDocuments({
    status: 'delinquent',
    dueDate: { $lt: moment().toDate() },
  });
  const loanDelinquencyRate = (totalDelinquentLoans / totalLoanApprovals) * 100;

  // calculate interest income
  const totalInterestIncome = await Loan.aggregate([
    { $match: { status: 'repaid' } },
    { $group: { _id: null, total: { $sum: '$interest' } } },
  ]);

  // calculate fees income
  const totalFeesIncome = await Loan.aggregate([
    { $match: { status: 'repaid' } },
    { $group: { _id: null, total: { $sum: '$fees' } } },
  ]);

  // calculate losses
  const totalLosses = await Loan.aggregate([
    { $match: { status: 'defaulted' } },
    { $group: { _id: null, total: { $sum: '$amount' } } },
  ]);

  return {
    loanApplicationRate,
    loanApprovalRate,
    loanRepaymentRate,
    loanDefaultRate,
    loanDelinquencyRate,
    totalInterestIncome,
    totalFeesIncome,
    totalLosses,
  };
};
