import Loan from "../models/loan";

export const getLoan = async (loanId) => {
  try {
    const loan = await Loan.findById(loanId);
    if (!loan) {
      throw new Error("Loan not found");
    }
    return { message: "Loan Found", result };
  } catch (error) {
    throw new Error(`Error getting loan: ${error.message}`);
  }
};
