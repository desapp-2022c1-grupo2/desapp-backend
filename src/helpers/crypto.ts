import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export const generateHashPassword = async (password: string) => {
  if (password) {
    // generate salt to hash password
    const salt = await bcrypt.genSalt(saltRounds);
    // now we set user password to hashed password
    return await bcrypt.hash(password, salt);
  }
};

export const compareHashPassword = async (
  reqPassword: string,
  userPassword: string,
) => {
  return bcrypt.compare(reqPassword, userPassword);
};
