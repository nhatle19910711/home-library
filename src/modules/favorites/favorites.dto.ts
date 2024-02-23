import { ApiProperty } from '@nestjs/swagger';
import { IFavorites } from './favorites.interface';
import { IArtist } from '../artists/artists.interface';
import { IAlbum } from '../albums/albums.interface';
import { ITrack } from '../tracks/tracks.interface';
import { Exclude } from 'class-transformer';

export class FavoritesDto implements IFavorites {
  @ApiProperty({
    type: [String],
  })
  artists: string[];

  @ApiProperty({
    type: [String],
  })
  albums: string[];

  @ApiProperty({
    type: [String],
  })
  tracks: string[];
}

export class ArtistResDto {
  @Exclude()
  id: string;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Boolean,
  })
  grammy: boolean;

  constructor(data: Partial<ArtistResDto>) {
    Object.assign(this, data);
  }
}

export class AlbumResDto {
  @Exclude()
  id: string;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Number,
  })
  year: number;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  artistId: string | null;

  constructor(data: Partial<AlbumResDto>) {
    Object.assign(this, data);
  }
}

export class TrackResDto {
  @Exclude()
  id: string;

  @ApiProperty({
    type: 'string',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  artistId: string | null;

  @ApiProperty({
    type: 'string',
    nullable: true,
  })
  albumId: string | null;

  @ApiProperty({
    type: 'number',
  })
  duration: number;

  constructor(data: Partial<TrackResDto>) {
    Object.assign(this, data);
  }
}

export class FavoritesResDto {
  @ApiProperty({
    type: [ArtistResDto],
  })
  artists: ArtistResDto[];

  @ApiProperty({
    type: [AlbumResDto],
  })
  albums: AlbumResDto[];

  @ApiProperty({
    type: [TrackResDto],
  })
  tracks: TrackResDto[];
}
