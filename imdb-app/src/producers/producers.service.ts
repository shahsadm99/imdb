import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producer } from './producer.schema';
import { CreateProducerDto } from './dto/producer.dto';

@Injectable()
export class ProducersService {
  constructor(
    @InjectModel(Producer.name)
    private producerModel: Model<Producer>,
  ) {}

  async create(createProducerDto: CreateProducerDto) {
    const producer = new this.producerModel(createProducerDto);
    return producer.save();
  }
  async findAll(): Promise<Producer[]> {
    return this.producerModel.find().exec();
  }
}
