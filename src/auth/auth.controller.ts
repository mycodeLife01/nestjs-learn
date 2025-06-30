import { Controller, Get, Param } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login/:id')
  login(@Param('id') id: string) {
    return { message: `I have logged in with id: ${id}` };
  }
  @Get('register')
  register() {
    return { message: 'I have registered' };
  }
}
