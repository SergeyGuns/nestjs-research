import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() cteateCatDto: CreateCatDto) {
    this.catsService.create(cteateCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
     return this.catsService.findAll();
  }
}