import { ApiProperty } from '@nestjs/swagger';
import { IAlbum, ICreateAlbum, IUpdateAlbum } from './albums.interface';
import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class AlbumDto implements IAlbum {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Number,
  })
  year: number;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  artistId: string | null;
}

export class CreateAlbumDto implements ICreateAlbum {
  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  name: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsInt()
  @IsDefined()
  @Min(1)
  @Max(2024)
  year: number;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Transform((o) => o?.value?.trim())
  artistId?: string;
}

export class UpdateAlbumDto implements IUpdateAlbum {
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(2024)
  year?: number;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Transform((o) => o?.value?.trim())
  artistId?: string;
}
