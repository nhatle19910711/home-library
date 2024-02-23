import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TracksRepository } from './tracks.repository';
import { ArtistsService } from '../artists/artists.service';
import { ICreateTrack, ITrack, IUpdateTrack } from './tracks.interface';
import { AlbumsService } from '../albums/albums.service';
import { v4 as uuidV4, validate } from 'uuid';

@Injectable()
export class TracksService {
  constructor(
    private readonly repo: TracksRepository,
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
  ) {}

  createTrack(data: ICreateTrack): ITrack {
    if (data.artistId) {
      try {
        const artist = this.artistsService.getArtistById(data.artistId);
        if (!artist) {
          throw new BadRequestException('artistId is invalid');
        }
      } catch (error) {
        throw new BadRequestException('artistId is invalid');
      }
    }

    if (data.albumId) {
      try {
        const artist = this.albumsService.getAlbumById(data.albumId);
        if (!artist) {
          throw new BadRequestException('albumId is invalid');
        }
      } catch (error) {
        throw new BadRequestException('albumId is invalid');
      }
    }

    const newTrack: ITrack = {
      ...data,
      id: uuidV4().toString(),
      albumId: data.albumId ? data.albumId : null,
      artistId: data.artistId ? data.artistId : null,
    };

    return this.repo.create(newTrack);
  }

  getAllTracks(): ITrack[] {
    return this.repo.findAll();
  }

  getTrackById(id: string): ITrack {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const track = this.repo.findById(id);
    if (!track) {
      throw new NotFoundException('Track is not found');
    }

    return track;
  }

  updateTrack(id: string, data: IUpdateTrack): ITrack {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const track = this.repo.findById(id);
    if (!track) {
      throw new NotFoundException('track is not found');
    }

    if (data.artistId) {
      try {
        const artist = this.artistsService.getArtistById(data.artistId);
        if (!artist) {
          throw new BadRequestException('artistId is invalid');
        }
      } catch (error) {
        throw new BadRequestException('artistId is invalid');
      }
    }

    if (data.albumId) {
      try {
        const artist = this.albumsService.getAlbumById(data.albumId);
        if (!artist) {
          throw new BadRequestException('albumId is invalid');
        }
      } catch (error) {
        throw new BadRequestException('albumId is invalid');
      }
    }

    return this.repo.update(id, data);
  }

  deleteTrack(id: string): void {
    if (!validate(id)) {
      throw new BadRequestException('Id is invalid');
    }
    const track = this.repo.findById(id);
    if (!track) {
      throw new NotFoundException('Track is not found');
    }

    this.repo.deleteById(id);
  }
}
