import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../../base/base.repository';
import { ITrack } from './tracks.interface';

@Injectable()
export class TracksRepository extends BaseRepository<ITrack> {}
