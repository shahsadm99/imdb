import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "../Header/ResponsiveAppBar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";

function Actors() {
  var index = 1;
  const [actors, setActors] = useState([{}]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/actors");
      const actors = await res.json();
      setActors(actors);
    })();
  }, []);

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
          {!add && <div>+ Add Actors</div>}
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
              />
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell># </TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {actors.map((actor: any) => (
              <TableRow
                key={actor.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index++}
                </TableCell>
                <TableCell align="right">{actor.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Actors;
