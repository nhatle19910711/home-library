import { ApiProperty } from '@nestjs/swagger';

export class BadRequestRes {
  @ApiProperty({
    type: Number,
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    type: String || [String],
    example: 'Bad Request',
  })
  message: string | string[];

  @ApiProperty({
    type: Date,
    example: '2024-02-22T07:26:18.708Z',
  })
  timestamp: Date;

  @ApiProperty({
    type: String,
    example: '/api/home-library/users',
  })
  path: string;
}

export class InternalServerErrorRes {
  @ApiProperty({
    type: Number,
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    type: String || [String],
    example: 'Internal Server Error',
  })
  message: string | string[];

  @ApiProperty({
    type: Date,
    example: '2024-02-22T07:26:18.708Z',
  })
  timestamp: Date;

  @ApiProperty({
    type: String,
    example: '/api/home-library/users',
  })
  path: string;
}

export class NotFoundRes {
  @ApiProperty({
    type: Number,
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    type: String || [String],
    example: 'Not Found',
  })
  message: string | string[];

  @ApiProperty({
    type: Date,
    example: '2024-02-22T07:26:18.708Z',
  })
  timestamp: Date;

  @ApiProperty({
    type: String,
    example: '/api/home-library/users',
  })
  path: string;
}

export class ForbiddenRes {
  @ApiProperty({
    type: Number,
    example: 403,
  })
  statusCode: number;

  @ApiProperty({
    type: String || [String],
    example: 'Forbidden',
  })
  message: string | string[];

  @ApiProperty({
    type: Date,
    example: '2024-02-22T07:26:18.708Z',
  })
  timestamp: Date;

  @ApiProperty({
    type: String,
    example: '/api/home-library/users',
  })
  path: string;
}
