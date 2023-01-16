import Loan from '../models/loan';

export const createLoan = async (reqBody) => {
  try {
    const loan = new Loan(reqBody);
    const result = await Loan.save();
    return { message: 'Loan created', result };
  } catch (error) {
    throw new Error(`Error creating loan: ${error.message}`);
  }
};
