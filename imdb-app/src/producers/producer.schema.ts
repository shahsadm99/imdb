import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
//import { Movie } from '../movies/movie.schema';

@Schema()
export class Producer extends Document {
  @Prop({ required: true, unique: true })
  name: string;

 // @Prop({ type: [{ type: 'ObjectId', ref: 'Movie' }] })
  //movies: Movie[];
}

export const ProducerSchema = SchemaFactory.createForClass(Producer);
