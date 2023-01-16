import Borrower from '../models/borrower';

export const deleteBorrower = async (borrowerId) => {
  try {
    const result = await Borrower.findByIdAndDelete(borrowerId);
    if (!result) {
      throw new Error('Borrower not found');
    }
    return { message: 'Borrower deleted', result };
  } catch (error) {
    throw new Error(`Error deleting borrower: ${error.message}`);
  }
};
