import { Module } from '@nestjs/common';
import { ProducersService } from './producers.service';
import { ProducersController } from './producers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProducerSchema } from './producer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Producer', schema: ProducerSchema }]),
  ],
  providers: [ProducersService],
  controllers: [ProducersController],
})
export class ProducersModule {}
