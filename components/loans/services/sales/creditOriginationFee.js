import mongoose from "mongoose";
import LoanCategory from "../models/LoanCategory";
import Loan from "../models/Loan";
import SalesAgent from "../models/SalesAgent";

const creditOriginationFee = async (req, res, next) => {
  try {
    // Get the loan category from the loan
    const loanCategory = await LoanCategory.findById(req.body.loanCategory);
    // Get the origination fee from the loan category
    const originationFee = loanCategory.originationFee;
    // Get the sales agent from the loan
    const salesAgent = await SalesAgent.findById(req.body.salesAgent);
    // Calculate the commission as a percentage of the origination fee
    const commission = originationFee * salesAgent.commissionRate;
    // Add the commission to the sales agent's balance
    salesAgent.balance += commission;
    // Check if the sales agent has reached the bonus threshold
    if (salesAgent.originatedLoans >= salesAgent.bonusThreshold) {
      // Add the bonus to the sales agent's balance
      salesAgent.balance += salesAgent.bonus;
    }
    // Save the sales agent
    await salesAgent.save();
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export default creditOriginationFee;
