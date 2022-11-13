import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export const generateHash = async (string: string) => {
  if (string) {
    // generate salt to hash password
    const salt = await bcrypt.genSalt(saltRounds);
    // now we set user password to hashed password
    return await bcrypt.hash(string, salt);
  }
};

export const compareHash = async (
  reqString: string,
  userString: string,
) => {
  return await bcrypt.compare(reqString, userString);
};
