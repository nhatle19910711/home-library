import { IAlbum } from '../albums/albums.interface';
import { IArtist } from '../artists/artists.interface';
import { ITrack } from '../tracks/tracks.interface';

export interface IFavorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}

export interface IFavoritesResponse {
  artists: IArtist[];
  albums: IAlbum[];
  tracks: ITrack[];
}
