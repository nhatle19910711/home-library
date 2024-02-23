import { Module, forwardRef } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { AlbumsRepository } from './albums.repository';
import { ArtistsModule } from '../artists/artists.module';
import { TracksModule } from '../tracks/tracks.module';
import { FavoritesModule } from '../favorites/favorites.module';

@Module({
  imports: [
    forwardRef(() => ArtistsModule),
    forwardRef(() => TracksModule),
    forwardRef(() => FavoritesModule),
  ],
  controllers: [AlbumsController],
  providers: [AlbumsService, AlbumsRepository],
  exports: [AlbumsService],
})
export class AlbumsModule {}
