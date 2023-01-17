const mongoose = require("mongoose");
const Loan = require("../models/Loan");

const assessFinancialHealth = async () => {
  try {
    // Get all loans
    const loans = await Loan.find();
    
    // Initialize variables to keep track of financial health indicators
    let interestIncome = 0;
    let fees = 0;
    let losses = 0;
    let potentialRisks = 0;
    let potentialIssues = 0;
    
    // Iterate through each loan to gather financial health indicators
    loans.forEach(loan => {
      interestIncome += loan.interest;
      fees += loan.fees;
      if (loan.status === "default" || loan.status === "delinquent") {
        losses += loan.balance;
        potentialRisks++;
      }
      if (loan.status === "delinquent") {
        potentialIssues++;
      }
    });
    
    // Log financial health indicators
    console.log(`Interest Income: ${interestIncome}`);
    console.log(`Fees: ${fees}`);
    console.log(`Losses: ${losses}`);
    console.log(`Potential Risks: ${potentialRisks}`);
    console.log(`Potential Issues: ${potentialIssues}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = assessFinancialHealth;
