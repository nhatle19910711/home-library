export interface IAlbum {
  id: string;
  name: string;
  year: number;
  artistId: string | null;
}

export interface ICreateAlbum {
  name: string;
  year: number;
  artistId: string | null;
}

export interface IUpdateAlbum {
  name?: string;
  year?: number;
  artistId?: string | null;
}
