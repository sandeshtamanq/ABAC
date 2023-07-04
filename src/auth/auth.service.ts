import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async register(createAuthDto: CreateAuthDto) {
    const newUser = this.userRepository.create(createAuthDto);
    const savedUser = await this.userRepository.save(newUser);
    if (savedUser) {
      return {
        message: 'User created successfully!',
      };
    }
  }

  async login(user: any) {
    const payload = { email: user?.email, sub: user.id };
    const jwtToken = this.jwtService.sign(payload);
    return {
      accessToken: jwtToken,
    };
  }

  async verify(email: string, password: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .andWhere('user.password = :password', { password })
      .getOne();

    if (!user) throw new UnauthorizedException('Email or password id invalid');
    return user;
  }
}
