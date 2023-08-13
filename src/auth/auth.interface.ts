export interface payloadDto {
  sub: number;
  iat: number;
}

export class LoginDataDto {
  email: string;
  password: string;
}
