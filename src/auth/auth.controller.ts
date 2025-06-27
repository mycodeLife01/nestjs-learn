import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login')
  login() {
    // test
    return 'hello world';
  }
}
