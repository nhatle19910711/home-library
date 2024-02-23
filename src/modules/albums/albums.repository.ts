import { Injectable } from '@nestjs/common';
import { IAlbum } from './albums.interface';
import { BaseRepository } from '../../base/base.repository';

@Injectable()
export class AlbumsRepository extends BaseRepository<IAlbum> {}
