import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LoggerModule } from 'nestjs-pino';
import * as pino from 'pino';
import { APP_FILTER } from '@nestjs/core';
import { AnyExceptionFilter } from './filters/any-exception.filter';

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRootAsync({
      useFactory: async () => {
        return {
          pinoHttp: {
            level: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
            redact: {
              paths: ['req.headers["access-token"]'],
              censor: '***',
            },
            serializers: {
              err: pino.stdSerializers.err,
              req: pino.stdSerializers.req,
            },
            autoLogging: false,
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AnyExceptionFilter,
    },
  ],
})
export class AppModule {}
