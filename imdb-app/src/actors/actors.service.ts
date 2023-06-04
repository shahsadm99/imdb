import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Actor } from './actor.schema';
import { Model } from 'mongoose';
import { CreateActorDto } from './dto/actor.dto';

@Injectable()
export class ActorsService {
  constructor(
    @InjectModel(Actor.name)
    private actorModel: Model<Actor>,
  ) {}

  async create(createActorDto: CreateActorDto) {
    const actor = new this.actorModel(createActorDto);
    return actor.save();
  }

  async findAll(): Promise<Actor[]> {
    return this.actorModel.find().exec();
  }
}
