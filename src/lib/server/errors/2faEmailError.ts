import { AuthError } from "next-auth";
export enum Type2faCodeEmailError {
  FAIL_CODE,
  FAIL_CREDENTIALS,
}
interface OptionsType {
  type2fa?: Type2faCodeEmailError;
}
export class Auth2faCodeEmailError extends AuthError {
  type2fa: Type2faCodeEmailError;
  simpleMessage: string;
  constructor(message: string, options: OptionsType = {}) {
    super(message);
    const { type2fa = Type2faCodeEmailError.FAIL_CREDENTIALS } = options;
    this.type2fa = type2fa;
    this.simpleMessage = message;
  }
}
