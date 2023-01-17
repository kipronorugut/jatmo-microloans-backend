import Member from "../models/Member";

export const getMember = async (MemberId) => {
  try {
    const member = await Member.findById(MemberId);
    if (!member) {
      throw new Error("Member not found");
    }
    return { message: "Member Found", result };
  } catch (error) {
    throw new Error(`Error getting Member: ${error.message}`);
  }
};
