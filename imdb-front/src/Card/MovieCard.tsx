import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function movieCard(movie: any) {
  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://cdn.pixabay.com/photo/2019/01/23/03/12/movie-3949479_1280.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>
              <Rating name="read-only" value={4} readOnly />
              <br />
              Year: {movie.year} <br />
              Producer: {movie.producer}
              <br />
              Actors: {movie.actors}
              <br />
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
