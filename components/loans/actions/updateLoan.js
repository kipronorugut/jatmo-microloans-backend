import Loan from '../models/loan';

export const updateLoan = async (loanId, updates) => {
  try {
    const result = await Loan.findByIdAndUpdate(loanId, updates, { new: true });
    if (!result) {
      throw new Error('Loan not found');
    }
    return { message: 'Loan updated', result };
  } catch (error) {
    throw new Error(`Error updating loan: ${error.message}`);
  }
};
