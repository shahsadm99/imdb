import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { CreateActorDto } from './dto/actor.dto';

@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}

  @Get()
  findAll() {
    return this.actorsService.findAll();
  }

  @Post()
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorsService.create(createActorDto);
  }
}
