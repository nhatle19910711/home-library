import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TracksService } from './tracks.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTrackDto, TrackDto, UpdateTrackDto } from './tracks.dto';
import {
  BadRequestRes,
  ForbiddenRes,
  InternalServerErrorRes,
  NotFoundRes,
} from '../../base/error.response';

@Controller('tracks')
@ApiTags('Tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a new track',
    type: TrackDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Create a new track',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Create a new track',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Create a new track',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Create a new track',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'createTrack',
    description: 'Create a new track',
  })
  createTrack(@Body() data: CreateTrackDto): TrackDto {
    return this.tracksService.createTrack(data);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get all tracks',
    type: [TrackDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get all tracks',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get all tracks',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get all tracks',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get all tracks',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getAllTracks',
    description: 'Get all tracks',
  })
  getAllTracks(): TrackDto[] {
    return this.tracksService.getAllTracks();
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get track by id',
    type: TrackDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Get track by id',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Get track by id',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Get track by id',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Get track by id',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'getTrackById',
    description: 'Get track by id',
  })
  getTrackById(@Param('id') id: string): TrackDto {
    return this.tracksService.getTrackById(id);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update track',
    type: TrackDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Update track',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Update track',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Update track',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Update track',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'updateTrack',
    description: 'Update track',
  })
  updateTrack(@Param('id') id: string, @Body() data: UpdateTrackDto): TrackDto {
    return this.tracksService.updateTrack(id, data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete track',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Delete track',
    type: BadRequestRes,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Delete track',
    type: InternalServerErrorRes,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Delete track',
    type: NotFoundRes,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Delete track',
    type: ForbiddenRes,
  })
  @ApiOperation({
    operationId: 'deleteTrack',
    description: 'Delete track',
  })
  deleteTrack(@Param('id') id: string): void {
    return this.tracksService.deleteTrack(id);
  }
}
