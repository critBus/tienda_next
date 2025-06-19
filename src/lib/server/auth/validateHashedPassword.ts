import bcrypt from "bcryptjs";
export const validateHashedPassword = async ({
  password,
  storePassword,
}: {
  password: string;
  storePassword: string;
}): Promise<boolean> => {
  const passwordMath = await bcrypt.compare(password, storePassword);
  return passwordMath;
};
