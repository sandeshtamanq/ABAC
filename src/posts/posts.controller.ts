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
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { PermissionGuard } from 'src/guards/permission.guard';
import { Modules } from 'src/utils/modules.enum';

import { Actions } from 'src/utils/action.enum';
import { UserRoles } from 'src/roles/entities/role.entity';
import { RequiredPermission } from 'src/decorators/permission.decorator';
import { MODULES } from 'src/roles/module.enum';
import { PERMISSIONS } from 'src/roles/permissions';

@ApiTags('Posts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @RequiredPermission(PERMISSIONS.POST_CREATE)
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @RequiredPermission(PERMISSIONS.POST_READ)
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @RequiredPermission(PERMISSIONS.POST_READ)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @RequiredPermission(PERMISSIONS.POST_UPDATE)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @RequiredPermission(PERMISSIONS.POST_DELETE)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
