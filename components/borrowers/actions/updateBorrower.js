import Borrower from '../models/borrower';

export const updateBorrowerAction = async (borrowerId, updates) => {
  try {
    const result = await Borrower.findByIdAndUpdate(borrowerId, updates, { new: true });
    if (!result) {
      throw new Error('Borrower not found');
    }
    return { message: 'Borrower updated', result };
  } catch (error) {
    throw new Error(`Error updating borrower: ${error.message}`);
  }
};
