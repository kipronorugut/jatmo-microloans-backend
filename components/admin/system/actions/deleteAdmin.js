import Member from '../models/Member';

export const deleteMember = async (MemberId) => {
  try {
    const result = await Member.findByIdAndDelete(MemberId);
    if (!result) {
      throw new Error('Member not found');
    }
    return { message: 'Member deleted', result };
  } catch (error) {
    throw new Error(`Error deleting Member: ${error.message}`);
  }
};
