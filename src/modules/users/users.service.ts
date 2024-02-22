import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ICreateUser, IUpdatePassword, IUser, IUserRes } from './users.interface';
import { UsersRepository } from './users.repository';
import { v4 as uuidV4, validate } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly repo: UsersRepository) {}

  createUser(data: ICreateUser): IUserRes {
    const newUser: IUser = {
      id: uuidV4().toString(),
      login: data.login,
      password: data.password,
      version: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.repo.create(newUser);

    return {
      id: newUser.id,
      login: newUser.login,
      version: newUser.version,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
  }

  getAllUsers(): IUserRes[] {
    const users = this.repo.findAll();

    return users.map((user) => ({
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));
  }

  getUserById(id: string): IUserRes {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const user = this.repo.findById(id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }

    return {
      id: user.id,
      login: user.login,
      version: user.version,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  updatePassword(id: string, data: IUpdatePassword): IUserRes {
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

    return {
      id: updateUser.id,
      login: updateUser.login,
      version: updateUser.version,
      createdAt: updateUser.createdAt,
      updatedAt: updateUser.updatedAt,
    };
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
