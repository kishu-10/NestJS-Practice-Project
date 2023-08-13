import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDataDto, payloadDto } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async loginUser(loginData: LoginDataDto) {
    const { email, password } = loginData;
    const authenticatedUser = await this.userService.findUserByEmail(email);
    const passwordMatch = authenticatedUser.password === password;
    if (!passwordMatch)
      throw new HttpException('Invalid Credential', HttpStatus.BAD_REQUEST);

    const payload: payloadDto = {
      sub: authenticatedUser.id,
      iat: Date.now(),
    };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.configService.get('ACCESS_TOKEN_EXPIRATION'),
      secret: this.configService.get('ACCESS_TOKEN_SECRET_KEY'),
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRATION'),
      secret: this.configService.get('REFRESH_TOKEN_SECRET_KEY'),
    });
    return { accessToken: accessToken, refreshToken: refreshToken };
  }
}
