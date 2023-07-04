import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    default: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  permissions: number;

  @ApiProperty({ default: 'admin', required: true })
  @IsString()
  @IsNotEmpty()
  roleName: string;
}
