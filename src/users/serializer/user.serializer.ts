import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { BaseUserSerializer } from './base-user.serializer';

export class UserSerializer {
  @ApiProperty({
    description: 'Message',
    type: String,
    example: 'User fetched successfully',
  })
  @Expose()
  message?: string;

  @ApiProperty({
    description: 'data',
    type: BaseUserSerializer,
    isArray: true,
  })
  @Expose()
  @Type(() => BaseUserSerializer)
  data: BaseUserSerializer[];
}
