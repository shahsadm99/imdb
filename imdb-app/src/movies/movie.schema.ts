import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Actor } from '../actors/actor.schema';
import { Producer } from '../producers/producer.schema';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  year: number;

  @Prop({ type: [{ type: 'ObjectId', ref: 'Actor' }] })
  actors: Actor[];

  @Prop({ type: 'ObjectId', ref: 'Producer', required: true })
  producer: Producer;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
