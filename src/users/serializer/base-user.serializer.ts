import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { UserRoles } from 'src/roles/entities/role.entity';

export class BaseUserSerializer {
  @ApiProperty({
    description: 'id',
    example: 1,
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: 'Email',
    example: 'lamasandesh400@gmail.com',
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'Role id',
    example: '12',
  })
  @Expose()
  @Type(() => UserRoles)
  role: UserRoles;
}
