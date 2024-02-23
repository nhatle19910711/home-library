import { Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  BadRequestRes,
  ForbiddenRes,
  InternalServerErrorRes,
  NotFoundRes,
} from '../../base/error.response';
import { FavoritesDto, FavoritesResDto } from './favorites.dto';

@Controller('favs')
@ApiTags('Favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all favorites',
    type: FavoritesResDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get all favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get all favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get all favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get all favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getAllFavorites',
    description: 'Get all favorites',
  })
  getAllFavorites(): FavoritesResDto {
    return this.favoritesService.getAllFavorites();
  }

  @Post('track/:id')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Add track to favorites',
    type: FavoritesDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Add track to favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Add track to favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Add track to favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Add track to favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'addTrackToFavorites',
    description: 'Add track to favorites',
  })
  addTrackToFavorites(@Param('id') id: string): FavoritesDto {
    return this.favoritesService.addTrackToFavorites(id);
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete track from favorites',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete track from favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete track from favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete track from favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete track from favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'deleteTrackFromFavorites',
    description: 'Delete track from favorites',
  })
  deleteTrackFromFavorites(@Param('id') id: string): void {
    return this.favoritesService.deleteTrackFromFavorites(id);
  }

  @Post('album/:id')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Add album to favorites',
    type: FavoritesDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Add album to favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Add album to favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Add album to favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Add album to favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'addAlbumToFavorites',
    description: 'Add album to favorites',
  })
  addAlbumToFavorites(@Param('id') id: string): FavoritesDto {
    return this.favoritesService.addAlbumToFavorites(id);
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete album from favorites',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete album from favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete album from favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete album from favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete album from favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'deleteAlbumFromFavorites',
    description: 'Delete album from favorites',
  })
  deleteAlbumFromFavorites(@Param('id') id: string): void {
    return this.favoritesService.deleteAlbumFromFavorites(id);
  }

  @Post('artist/:id')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Add artist to favorites',
    type: FavoritesDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Add artist to favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Add artist to favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Add artist to favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Add artist to favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'addArtistToFavorites',
    description: 'Add artist to favorites',
  })
  addArtistToFavorites(@Param('id') id: string): FavoritesDto {
    return this.favoritesService.addArtistToFavorites(id);
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete artist from favorites',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete artist from favorites',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete artist from favorites',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete artist from favorites',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete artist from favorites',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'deleteArtistFromFavorites',
    description: 'Delete artist from favorites',
  })
  deleteArtistFromFavorites(@Param('id') id: string): void {
    return this.favoritesService.deleteArtistFromFavorites(id);
  }
}
