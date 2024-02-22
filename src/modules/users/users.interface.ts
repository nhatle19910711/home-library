export interface IUser {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUser {
  login: string;
  password: string;
}

export interface IUpdatePassword {
  oldPassword: string;
  newPassword: string;
}
