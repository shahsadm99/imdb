import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { ActorsController } from './actors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActorSchema } from './actor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Actor', schema: ActorSchema }]),
  ],
  providers: [ActorsService],
  controllers: [ActorsController],
})
export class ActorsModule {}
