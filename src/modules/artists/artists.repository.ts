import { Injectable } from '@nestjs/common';
import { IArtist } from './artist.interface';

@Injectable()
export class ArtistsRepository {
  private artistModel: IArtist[] = [];

  create(data: IArtist): IArtist {
    this.artistModel.push(data);
    return data;
  }

  findById(id: string): IArtist {
    return this.artistModel.find((artist) => artist.id === id);
  }

  // find(query: Partial<IUser>): IUser[] {
  //   return this.userModel.filter((user) => {
  //     for (const key in query) {
  //       if (!user[key] === query[key]) {
  //         false;
  //       }
  //     }
  //     return true;
  //   });
  // }

  findAll(): IArtist[] {
    return this.artistModel;
  }

  //   updatePassword(id: string, password: string) {
  //     const index = this.userModel.findIndex((user) => user.id === id);

  //     this.userModel[index] = {
  //       ...this.userModel[index],
  //       password: password,
  //       version: this.userModel[index].version + 1,
  //       updatedAt: new Date(),
  //     };
  //     return this.userModel[index];
  //   }

  //   deleteById(id: string): void {
  //     const index = this.userModel.findIndex((user) => user.id === id);

  //     this.userModel.splice(index, 1);
  //   }
}
