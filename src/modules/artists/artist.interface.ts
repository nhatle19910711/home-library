export interface IArtist {
  id: string;
  name: string;
  grammy: boolean;
}

export interface ICreateArtist {
  name: string;
  grammy: boolean;
}

export interface IUpdateArtist {
  name?: string;
  grammy?: boolean;
}
