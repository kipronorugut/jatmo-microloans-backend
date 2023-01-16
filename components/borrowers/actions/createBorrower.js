import Borrower from '../models/borrower';

export const createBorrower = async (reqBody) => {
  try {
    const borrower = new Borrower(reqBody);
    const result = await borrower.save();
    return { message: 'Borrower created', result };
  } catch (error) {
    throw new Error(`Error creating borrower: ${error.message}`);
  }
};
