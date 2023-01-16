import Borrower from "../models/borrower";

export const getBorrower = async (borrowerId) => {
  try {
    const borrower = await Borrower.findById(borrowerId);
    if (!borrower) {
      throw new Error("Borrower not found");
    }
    return { message: "Borrower Found", result };
  } catch (error) {
    throw new Error(`Error getting borrower: ${error.message}`);
  }
};
