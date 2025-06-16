import bcrypt from "bcryptjs";
export const createHashedPassword = async ({
  password,
}: {
  password: string;
}): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};
