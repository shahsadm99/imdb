import { IsString, IsNumber, ArrayNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  name: string;

  @IsNumber()
  year: number;

  @ArrayNotEmpty()
  actors: string[];

  @IsString()
  producer: string;
}

export class UpdateMovieDto {
  @IsString()
  name: string;

  @IsNumber()
  year: number;

  @ArrayNotEmpty()
  actors: string[];

  @IsString()
  producer: string;
}
