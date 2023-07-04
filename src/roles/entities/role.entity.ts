import { User } from 'src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user-roles' })
export class UserRoles extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roleName: string;

  @Column({ nullable: true, type: 'bigint' })
  permissions: number;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany(() => User, (user) => user.role)
  user: User[];
}
