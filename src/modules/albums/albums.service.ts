import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AlbumsRepository } from './albums.repository';
import { IAlbum, ICreateAlbum, IUpdateAlbum } from './albums.interface';
import { ArtistsService } from '../artists/artists.service';
import { v4 as uuidV4, validate } from 'uuid';

@Injectable()
export class AlbumsService {
  constructor(
    private readonly repo: AlbumsRepository,
    private readonly artistsService: ArtistsService,
  ) {}

  createAlbum(data: ICreateAlbum): IAlbum {
    if (data.artistId) {
      const artist = this.artistsService.getArtistById(data.artistId);
      if (!artist) {
        throw new BadRequestException('artistId is invalid');
      }
    }

    const newAlbum: IAlbum = {
      id: uuidV4().toString(),
      ...data,
    };

    return this.repo.create(newAlbum);
  }

  getAllAlbums(): IAlbum[] {
    return this.repo.findAll();
  }

  getAlbumById(id: string): IAlbum {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const album = this.repo.findById(id);
    if (!album) {
      throw new NotFoundException('Album is not found');
    }

    return album;
  }

  updateAlbum(id: string, data: IUpdateAlbum): IAlbum {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const album = this.repo.findById(id);
    if (!album) {
      throw new NotFoundException('Album is not found');
    }

    if (data.artistId) {
      const artist = this.artistsService.getArtistById(data.artistId);
      if (!artist) {
        throw new BadRequestException('artistId is invalid');
      }
    }

    return this.repo.update(id, data);
  }
}
