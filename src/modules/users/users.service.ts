import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ICreateUser, IUpdatePassword, IUser } from './users.interface';
import { UsersRepository } from './users.repository';
import { v4 as uuidV4, validate } from 'uuid';
import { plainToClass } from 'class-transformer';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UsersRepository) {}

  createUser(data: ICreateUser): IUser {
    const users = this.repo.find({ login: data.login });
    if (users.length) {
      throw new BadRequestException(`User ${data.login} have already existed`);
    }

    const newUser: IUser = {
      id: uuidV4().toString(),
      login: data.login,
      password: data.password,
      version: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.repo.create(newUser);

    return plainToClass(UserDto, newUser);
  }

  getAllUsers(): IUser[] {
    const users = this.repo.findAll();

    return users.map((user) => plainToClass(UserDto, user));
  }

  getUserById(id: string): IUser {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const user = this.repo.findById(id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }

    return plainToClass(UserDto, user);
  }

  updatePassword(id: string, data: IUpdatePassword): IUser {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }

    const user = this.repo.findById(id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }

    if (user.password != data.oldPassword) {
      throw new ForbiddenException('Old password is invalid');
    }

    const updateUser = this.repo.updatePassword(id, data.newPassword);

    return plainToClass(UserDto, updateUser);
  }

  deleteUser(id: string): void {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }

    const user = this.repo.findById(id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }

    this.repo.deleteById(id);
  }
}
