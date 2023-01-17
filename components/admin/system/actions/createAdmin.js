import Admin from '../models/Admin';

export const createAdmin = async (reqBody) => {
  try {
    const admin = new Admin(reqBody);
    const result = await admin.save();
    return { message: 'Admin created', result };
  } catch (error) {
    throw new Error(`Error creating Admin: ${error.message}`);
  }
};
