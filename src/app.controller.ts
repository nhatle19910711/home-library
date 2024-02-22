import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Ping')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  @ApiOperation({
    operationId: 'ping',
    description: 'Ping pong',
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
