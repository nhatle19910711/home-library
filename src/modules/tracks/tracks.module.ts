import { Module, forwardRef } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { TracksRepository } from './tracks.repository';
import { AlbumsModule } from '../albums/albums.module';
import { ArtistsModule } from '../artists/artists.module';

@Module({
  imports: [forwardRef(() => AlbumsModule), forwardRef(() => ArtistsModule)],
  controllers: [TracksController],
  providers: [TracksService, TracksRepository],
  exports: [TracksService],
})
export class TracksModule {}
