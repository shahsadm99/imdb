import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Movie } from './movie.schema';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name)
    private movieModel: Model<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  async create(createMovieDto: CreateMovieDto) {
    const movie = new this.movieModel(createMovieDto);
    return movie.save();
  }

  async findOne(id: string) {
    return this.movieModel.findById(id).populate('actors producer');
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return this.movieModel
      .findByIdAndUpdate(id, updateMovieDto, { new: true })
      .populate('actors producer');
  }

  async remove(id: string) {
    return this.movieModel.findByIdAndDelete(id);
  }
}
