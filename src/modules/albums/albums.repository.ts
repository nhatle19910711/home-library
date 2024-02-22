import { Injectable } from '@nestjs/common';
import { IAlbum, IUpdateAlbum } from './albums.interface';

@Injectable()
export class AlbumsRepository {
  private albumModel: IAlbum[] = [];

  create(data: IAlbum): IAlbum {
    this.albumModel.push(data);
    return data;
  }

  findAll(): IAlbum[] {
    return this.albumModel;
  }

  findById(id: string): IAlbum {
    return this.albumModel.find((album) => album.id === id);
  }

  update(id: string, data: IUpdateAlbum): IAlbum {
    const index = this.albumModel.findIndex((album) => album.id === id);
    this.albumModel[index] = { ...this.albumModel[index], ...data };
    return this.albumModel[index];
  }
}
