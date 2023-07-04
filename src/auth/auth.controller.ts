import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { LoginDto } from './dto/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginDto })
  @UsePipes(ValidationPipe)
  @Post('login')
  login(@Req() request: Request) {
    return this.authService.login(request.user);
  }

  @UsePipes(ValidationPipe)
  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }
}
