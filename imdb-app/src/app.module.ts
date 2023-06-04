import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { ProducersModule } from './producers/producers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/imdb'),
    MoviesModule,
    ActorsModule,
    ProducersModule,
  ],
})
export class AppModule {}
