import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({ default: 'lamasandesh400@gmail.com', required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ default: '1111111', required: true })
  @IsNotEmpty()
  password: string;
}
