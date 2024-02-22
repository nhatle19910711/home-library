import { ApiProperty } from '@nestjs/swagger';
import { ICreateUser, IUpdatePassword, IUser } from './users.interface';
import { IsNotEmpty, IsString } from 'class-validator';
import { Exclude, Transform } from 'class-transformer';

export class CreateUserDto implements ICreateUser {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  login: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  password: string;
}

export class UserDto implements IUser {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  login: string;

  @ApiProperty({
    type: String,
  })
  @Exclude()
  password: string;

  @ApiProperty({
    type: Number,
  })
  version: number;

  @ApiProperty({
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    type: Date,
  })
  updatedAt: Date;

  constructor(data: Partial<UserDto>) {
    Object.assign(this, data);
  }
}

export class UpdatePasswordDto implements IUpdatePassword {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  oldPassword: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  newPassword: string;
}
