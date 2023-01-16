import Loan from '../models/loan';

export const deleteLoan = async (loanId) => {
  try {
    const result = await Loan.findByIdAndDelete(loanId);
    if (!result) {
      throw new Error('Loan not found');
    }
    return { message: 'Loan deleted', result };
  } catch (error) {
    throw new Error(`Error deleting Loan: ${error.message}`);
  }
};
