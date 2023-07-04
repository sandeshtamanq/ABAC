import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRoles } from './entities/role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoles])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
