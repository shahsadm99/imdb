import React, { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "../Header/ResponsiveAppBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function Movies() {



    const [producers, setProducers] = useState([{}]);
    useEffect(() => {
      (async () => {
        const res = await fetch("/producers");
        const producers = await res.json();
        setProducers(producers);
      })();
    }, []);


    const [actors, setActors] = useState([{}]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/actors");
      const actors = await res.json();
      setActors(actors);
    })();
  }, []);
    



      
        const [producerId, setProducerId] = React.useState<string[]>([]);
      
        const handleProducer = (event: SelectChangeEvent<typeof producerId>) => {
          const {
            target: { value },
          } = event;
          setProducerId(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };

        const [actorId, setActorId] = React.useState<string[]>([]);
      
        const handleActor = (event: any) => {
           // console.log(event);
          const {
            target: { value },
          } = event;
          //console.log(value);
          setActorId(
             typeof value === 'string' ? value.split(',') : value,
          );
        };



        const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

      
















  const [age, setAge] = React.useState("");

  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/movies");
      const movies = await res.json();
      setMovies(movies);
    })();
  }, [movies]);

  const [add, setAdd] = useState(false);
  const handlebutton = (e: any) => {
    console.log(JSON.stringify({ name: textInput }));
    if (e.target.value == "actorname") {
      axios
        .post("/actors", {
          name: textInput,
        })
        .then((response) => {
          console.log(response.data);

          // Handle data
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setAdd(!add);
    console.log(e);
  };
  const handleChange = (e: any) => {
    console.log(e.target.value);
    //setTextInput(values=> ({...values,e.target.value}));
  };
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <ResponsiveAppBar />
      <div>
        <br />
        <br />
        <br />
        <Button variant="contained" onClick={handlebutton}>
          {!add && <div>+ Add Movies</div>}
          {add && <div>Close</div>}{" "}
        </Button>
        <br />
        <br />
        <br />
        <div>
          {add && (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              >
                Name
              </TextField>

              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={age}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {producers.map((producer: any) => (
            <MenuItem key={producer.name} value={producer.name}>
                <ListItemText primary={producer.name} />
            </MenuItem>
          ))}
               
              </Select>

              <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={actorId}
          onChange={handleActor}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {actors.map((actor: any) => (
            <MenuItem value={actor.name}>
              <Checkbox checked={actorId.indexOf(actor.name) > -1} />
              <ListItemText primary={actor.name} />
            </MenuItem>
          ))}
        </Select>

              <Button
                variant="contained"
                value="actorname"
                onClick={handlebutton}
              >
                Submit
              </Button>
            </Box>
          )}
        </div>
      </div>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {movies.map((movie: any) => (
            <>
              <MovieCard
                name={movie.name}
                year={movie.year}
                producer={movie.producer}
                actors={movie.actors}
              />
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Movies;
