import * as bcrypt from 'bcrypt';

export const plainToHash = async (plainText: string) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(plainText, salt);
};

export const compareHash = async (storedHash: string, toBeChecked: string): Promise<boolean> => {
  return await bcrypt.compare(toBeChecked, storedHash);
};
