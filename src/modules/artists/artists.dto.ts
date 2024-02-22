import { ApiProperty } from '@nestjs/swagger';
import { IArtist, ICreateArtist } from './artist.interface';
import { IsBoolean, IsDefined, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class ArtistDto implements IArtist {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Boolean,
  })
  grammy: boolean;
}

export class CreateArtistDto implements ICreateArtist {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  name: string;

  @ApiProperty({
    type: Boolean,
    required: true,
  })
  @IsBoolean()
  @IsDefined()
  grammy: boolean;
}
