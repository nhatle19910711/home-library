import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ArtistsRepository } from './artists.repository';
import { IArtist, ICreateArtist, IUpdateArtist } from './artists.interface';
import { v4 as uuidV4, validate } from 'uuid';

@Injectable()
export class ArtistsService {
  constructor(private readonly repo: ArtistsRepository) {}

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

    this.repo.deleteById(id);
  }
}
