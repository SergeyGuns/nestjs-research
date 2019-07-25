import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { MiddlewareBuilder } from '@nestjs/core';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [ CatsController],
  providers: [ CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({path:'cats',method: RequestMethod.GET})
  }
}

