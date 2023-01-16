import Member from '../models/Member';

export const updateMemberAction = async (MemberId, updates) => {
  try {
    const result = await Member.findByIdAndUpdate(MemberId, updates, { new: true });
    if (!result) {
      throw new Error('Member not found');
    }
    return { message: 'Member updated', result };
  } catch (error) {
    throw new Error(`Error updating Member: ${error.message}`);
  }
};
