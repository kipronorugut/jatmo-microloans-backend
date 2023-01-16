import Member from '../models/Member';

export const createMember = async (reqBody) => {
  try {
    const member = new Member(reqBody);
    const result = await member.save();
    return { message: 'Member created', result };
  } catch (error) {
    throw new Error(`Error creating Member: ${error.message}`);
  }
};
