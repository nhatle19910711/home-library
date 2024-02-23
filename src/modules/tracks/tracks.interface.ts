export interface ITrack {
  id: string;
  name: string;
  artistId: string | null;
  albumId: string | null;
  duration: number;
}

export interface ICreateTrack {
  name: string;
  artistId?: string;
  albumId?: string;
  duration: number;
}

export interface IUpdateTrack {
  name?: string;
  artistId?: string;
  albumId?: string;
  duration?: number;
}
