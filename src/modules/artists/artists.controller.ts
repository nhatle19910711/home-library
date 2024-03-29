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
import { ArtistsService } from './artists.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArtistDto, CreateArtistDto, UpdateArtistDto } from './artists.dto';
import {
  BadRequestRes,
  ForbiddenRes,
  InternalServerErrorRes,
  NotFoundRes,
} from '../../base/error.response';

@Controller('artists')
@ApiTags('Artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a new artist',
    type: ArtistDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Create a new artist',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Create a new artist',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Create a new artist',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Create a new artist',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'createArtist',
    description: 'Create a new artist',
  })
  createArtist(@Body() data: CreateArtistDto): ArtistDto {
    return this.artistsService.createArtist(data);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all artists',
    type: [ArtistDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get all artists',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get all artists',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get all artists',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get all artists',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getAllArtists',
    description: 'Get all artists',
  })
  getAllArtists(): ArtistDto[] {
    return this.artistsService.getAllArtists();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get artist by id',
    type: ArtistDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get artist by id',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get artist by id',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get artist by id',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get artist by id',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getArtistById',
    description: 'Get artist by id',
  })
  getArtistById(@Param('id') id: string): ArtistDto {
    return this.artistsService.getArtistById(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update artist',
    type: ArtistDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Update artist',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Update artist',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Update artist',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Update artist',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'updateArtist',
    description: 'Update artist',
  })
  updateArtist(@Param('id') id: string, @Body() data: UpdateArtistDto): ArtistDto {
    return this.artistsService.updateArtist(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete artist',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete artist',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete artist',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete artist',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete artist',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'deleteArtist',
    description: 'Delete artist',
  })
  deleteArtist(@Param('id') id: string): void {
    return this.artistsService.deleteArtist(id);
  }
}
