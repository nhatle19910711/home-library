import { Injectable } from '@nestjs/common';
import { IArtist } from './artists.interface';
import { BaseRepository } from '../../base/base.repository';

@Injectable()
export class ArtistsRepository extends BaseRepository<IArtist> {}
