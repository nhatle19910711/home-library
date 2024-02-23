import { TracksService } from './../tracks/tracks.service';
import { AlbumsService } from './../albums/albums.service';
import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
  forwardRef,
} from '@nestjs/common';
import { IFavorites, IFavoritesResponse } from './favorites.interface';
import { ArtistsService } from '../artists/artists.service';
import { validate } from 'uuid';
import { plainToClass } from 'class-transformer';
import { AlbumResDto, ArtistResDto, TrackResDto } from './favorites.dto';

@Injectable()
export class FavoritesService {
  constructor(
    @Inject(forwardRef(() => ArtistsService))
    private readonly artistsService: ArtistsService,
    @Inject(forwardRef(() => AlbumsService))
    private readonly albumsService: AlbumsService,
    @Inject(forwardRef(() => TracksService))
    private readonly tracksService: TracksService,
  ) {}
  private favorites: IFavorites = {
    artists: [],
    albums: [],
    tracks: [],
  };

  getAllFavorites(): IFavoritesResponse {
    const artists = this.favorites.artists.map((id) =>
      plainToClass(ArtistResDto, this.artistsService.getArtistById(id)),
    );
    const albums = this.favorites.albums.map((id) =>
      plainToClass(AlbumResDto, this.albumsService.getAlbumById(id)),
    );
    const tracks = this.favorites.tracks.map((id) =>
      plainToClass(TrackResDto, this.tracksService.getTrackById(id)),
    );

    return { artists, albums, tracks };
  }

  addTrackToFavorites(id: string): IFavorites {
    try {
      this.tracksService.getTrackById(id);
    } catch (error) {
      if (error.status === 400) {
        throw error;
      } else {
        throw new UnprocessableEntityException('trackId does not exist');
      }
    }

    this.favorites.tracks.push(id);

    return this.favorites;
  }

  deleteTrackFromFavorites(id: string): void {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const index = this.favorites.tracks.findIndex((track) => track === id);
    if (index === -1) {
      throw new NotFoundException('Track is not favorite');
    }

    this.favorites.tracks.splice(index, 1);
  }

  addAlbumToFavorites(id: string): IFavorites {
    try {
      this.albumsService.getAlbumById(id);
    } catch (error) {
      if (error.status === 400) {
        throw error;
      } else {
        throw new UnprocessableEntityException('albumId does not exist');
      }
    }

    this.favorites.albums.push(id);

    return this.favorites;
  }

  deleteAlbumFromFavorites(id: string): void {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const index = this.favorites.albums.findIndex((album) => album === id);
    if (index === -1) {
      throw new NotFoundException('Album is not favorite');
    }

    this.favorites.albums.splice(index, 1);
  }

  addArtistToFavorites(id: string): IFavorites {
    try {
      this.artistsService.getArtistById(id);
    } catch (error) {
      if (error.status === 400) {
        throw error;
      } else {
        throw new UnprocessableEntityException('artistId does not exist');
      }
    }

    this.favorites.artists.push(id);

    return this.favorites;
  }

  deleteArtistFromFavorites(id: string): void {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const index = this.favorites.artists.findIndex((artist) => artist === id);
    if (index === -1) {
      throw new NotFoundException('Artist is not favorite');
    }

    this.favorites.artists.splice(index, 1);
  }
}
