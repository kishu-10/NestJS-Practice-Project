import { Body, Controller, Post } from '@nestjs/common';
import { LoginDataDto } from 'src/auth/auth.interface';
import { AuthService } from 'src/auth/auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDataDto: LoginDataDto) {
    return this.authService.loginUser(loginDataDto);
  }
}
