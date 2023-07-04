import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ default: 'lamasandesh400@gmail.com', required: true })
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ default: '1111111', required: true })
  @IsNotEmpty()
  password: string;
}
