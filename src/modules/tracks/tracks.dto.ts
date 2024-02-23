import { ApiProperty } from '@nestjs/swagger';
import { ICreateTrack, ITrack, IUpdateTrack } from './tracks.interface';
import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class TrackDto implements ITrack {
  @ApiProperty({
    type: 'string',
  })
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
}

export class CreateTrackDto implements ICreateTrack {
  @ApiProperty({
    type: 'string',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  name: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  artistId?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  albumId?: string;

  @ApiProperty({
    type: 'number',
    required: true,
  })
  @IsInt()
  @IsDefined()
  @Min(1)
  duration: number;
}

export class UpdateTrackDto implements IUpdateTrack {
  @ApiProperty({
    type: 'string',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  name?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  artistId?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  albumId?: string;

  @ApiProperty({
    type: 'number',
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  duration?: number;
}
