import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//import { Movie } from '../movies/movie.schema';

@Schema()
export class Actor extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  //@Prop({ type: [{ type: 'ObjectId', ref: 'Movie' }] })
  //movies: Movie[];
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
