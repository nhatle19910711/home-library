import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdatePasswordDto, UserResDto } from './users.dto';
import {
  BadRequestRes,
  ForbiddenRes,
  InternalServerErrorRes,
  NotFoundRes,
} from '../../shared/error.response';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a new user',
    type: UserResDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Create a new user',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Create a new user',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Create a new user',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Create a new user',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'createUser',
    description: 'Create a new user',
  })
  createUser(@Body() data: CreateUserDto): UserResDto {
    return this.usersService.createUser(data);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all users',
    type: [UserResDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get all users',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get all users',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get all users',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get all users',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getALLUsers',
    description: 'Get all users',
  })
  getAllUsers(): UserResDto[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get user by id',
    type: UserResDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get user by id',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get user by id',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get user by id',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get user by id',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getUserById',
    description: 'Get user by id',
  })
  getUserById(@Param('id') id: string): UserResDto {
    return this.usersService.getUserById(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update password for user',
    type: UserResDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Update password for user',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Update password for user',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Update password for user',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Update password for user',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'updatePassword',
    description: 'Update password for user',
  })
  updatePassword(@Param('id') id: string, @Body() data: UpdatePasswordDto): UserResDto {
    return this.usersService.updatePassword(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete user',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete user',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete user',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete user',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete user',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'updatePassword',
    description: 'Delete user',
  })
  deleteUser(@Param('id') id: string): void {
    return this.usersService.deleteUser(id);
  }
}
