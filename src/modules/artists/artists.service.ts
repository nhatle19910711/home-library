import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { ArtistsRepository } from './artists.repository';
import { IArtist, ICreateArtist, IUpdateArtist } from './artists.interface';
import { v4 as uuidV4, validate } from 'uuid';
import { AlbumsService } from '../albums/albums.service';
import { TracksService } from '../tracks/tracks.service';
import { FavoritesService } from '../favorites/favorites.service';

@Injectable()
export class ArtistsService {
  constructor(
    private readonly repo: ArtistsRepository,
    @Inject(forwardRef(() => AlbumsService))
    private albumsService: AlbumsService,
    @Inject(forwardRef(() => AlbumsService))
    private tracksService: TracksService,
    @Inject(forwardRef(() => FavoritesService))
    private readonly favoritesService: FavoritesService,
  ) {}

  createArtist(data: ICreateArtist): IArtist {
    const newArtist: IArtist = {
      id: uuidV4().toString(),
      ...data,
    };

    return this.repo.create(newArtist);
  }

  getAllArtists(): IArtist[] {
    return this.repo.findAll();
  }

  getArtistById(id: string): IArtist {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const artist = this.repo.findById(id);
    if (!artist) {
      throw new NotFoundException('Artist is not found');
    }

    return artist;
  }

  updateArtist(id: string, data: IUpdateArtist): IArtist {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const artist = this.repo.findById(id);
    if (!artist) {
      throw new NotFoundException('Artist is not found');
    }

    return this.repo.update(id, data);
  }

  deleteArtist(id: string): void {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const artist = this.repo.findById(id);
    if (!artist) {
      throw new NotFoundException('Artist is not found');
    }

    this.albumsService.updateAlbums({ artistId: artist.id }, { artistId: null });
    this.tracksService.updateTracks({ artistId: artist.id }, { artistId: null });
    try {
      this.favoritesService.deleteArtistFromFavorites(id);
    } catch (error) {}

    this.repo.deleteById(id);
  }
}
