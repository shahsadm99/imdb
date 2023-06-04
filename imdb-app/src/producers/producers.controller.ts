import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { CreateProducerDto } from './dto/producer.dto';

@Controller('producers')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}

  @Get()
  findAll() {
    return this.producersService.findAll();
  }

  @Post()
  create(@Body() createProducerDto: CreateProducerDto) {
    return this.producersService.create(createProducerDto);
  }
}
