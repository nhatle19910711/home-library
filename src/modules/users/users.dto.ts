import { ApiProperty } from '@nestjs/swagger';
import { ICreateUser, IUpdatePassword, IUserRes } from './users.interface';
import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

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

export class UserResDto implements IUserRes {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  login: string;

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
