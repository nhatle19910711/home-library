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
import { AlbumsService } from './albums.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlbumDto, CreateAlbumDto, UpdateAlbumDto } from './albums.dto';
import {
  BadRequestRes,
  ForbiddenRes,
  InternalServerErrorRes,
  NotFoundRes,
} from '../../base/error.response';

@Controller('albums')
@ApiTags('Albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a new album',
    type: AlbumDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Create a new album',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Create a new album',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Create a new album',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Create a new album',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'createAlbum',
    description: 'Create a new album',
  })
  createAlbum(@Body() data: CreateAlbumDto): AlbumDto {
    return this.albumsService.createAlbum(data);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all albums',
    type: [AlbumDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get all albums',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get all albums',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get all albums',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get all albums',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getAllAlbums',
    description: 'Get all albums',
  })
  getAllAlbums(): AlbumDto[] {
    return this.albumsService.getAllAlbums();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get album by id',
    type: AlbumDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get album by id',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get album by id',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get album by id',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get album by id',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getAlbumById',
    description: 'Get album by id',
  })
  getAlbumById(@Param('id') id: string): AlbumDto {
    return this.albumsService.getAlbumById(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update album',
    type: AlbumDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Update album',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Update album',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Update album',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Update album',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'updateAlbum',
    description: 'Update album',
  })
  updateAlbum(@Param('id') id: string, @Body() data: UpdateAlbumDto): AlbumDto {
    return this.albumsService.updateAlbum(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete album',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete album',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete album',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete album',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete album',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'deleteAlbum',
    description: 'Delete album',
  })
  deleteAlbum(@Param('id') id: string): void {
    return this.albumsService.deleteAlbum(id);
  }
}
