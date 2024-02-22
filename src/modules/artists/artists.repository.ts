import { Injectable } from '@nestjs/common';
import { IArtist, IUpdateArtist } from './artists.interface';

@Injectable()
export class ArtistsRepository {
  private artistModel: IArtist[] = [];

  create(data: IArtist): IArtist {
    this.artistModel.push(data);
    return data;
  }

  findById(id: string): IArtist {
    return this.artistModel.find((artist) => artist.id === id);
  }

  findAll(): IArtist[] {
    return this.artistModel;
  }

  update(id: string, data: IUpdateArtist): IArtist {
    const index = this.artistModel.findIndex((artist) => artist.id === id);
    this.artistModel[index] = { ...this.artistModel[index], ...data };
    return this.artistModel[index];
  }

  deleteById(id: string): void {
    const index = this.artistModel.findIndex((artist) => artist.id === id);

    this.artistModel.splice(index, 1);
  }
}
