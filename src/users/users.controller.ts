import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/guards/permission.guard';
import { RequiredPermission } from 'src/decorators/permission.decorator';
import { PERMISSIONS } from 'src/roles/permissions';
import { UserSerializer } from './serializer/user.serializer';
import { plainToClass } from 'class-transformer';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @RequiredPermission(PERMISSIONS.USER_READ)
  @ApiOkResponse({
    description: 'All manufacture With Pagination',
    type: UserSerializer,
  })
  // @ApiBadRequestResponse({
  //   description: 'Unable to add',
  // })
  // @ApiUnauthorizedResponse({
  //   description: 'Unauthorize Access',
  // })
  async findAll() {
    const users = await this.usersService.findAll();
    return plainToClass(
      UserSerializer,
      { data: users },
      { strategy: 'excludeAll' },
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @RequiredPermission(PERMISSIONS.USER_UPDATE)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @RequiredPermission(PERMISSIONS.USER_DELETE)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
