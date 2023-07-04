import { registerAs } from '@nestjs/config';
import { Post } from 'src/posts/entities/post.entity';
import { UserRoles } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';

export const OrmConfig = registerAs('database', () => {
  return {
    type: 'mysql',
    // host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: +process.env.DB_PORT,
    synchronize: true,
    entities: [User, UserRoles, Post],
  };
});
