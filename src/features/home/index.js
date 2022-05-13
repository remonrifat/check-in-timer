import { AppBar, IconButton, Paper, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { logOut } from "../../services/authService";
import Timer from "../timer/timer";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent sx={{ height: 300, ml: 4 }}>
      <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
        <b> TODAYS TASK</b>
        <Button sx={{ ml: 5 }} variant="contained">Review</Button>
        <Button sx={{ ml: 2 }} variant="contained">Submit</Button>
      </Typography>
      <hr />

      <Typography variant="h6" component="div" color="text.primary">
        {/* be{bull}nev{bull}o{bull}lent */}
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, est dignissimos obcaecati similique reiciendis modi perferendis. Quisquam, voluptate sequi magnam, hic eos explicabo nulla aliquid tempora voluptatibus cupiditate animi officia!</h4>
      </Typography>
      <Typography sx={{ mb: 1.5 }} >

      </Typography>

    </CardContent>
    <CardActions>

    </CardActions>
    <hr />
    <Typography variant="body2">
      <h2 sx={{ textAlign: "center", color: "success" }}>You  Have To Finish This Task</h2>
    </Typography>
  </React.Fragment>
);

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`
  }
};



export default function Home() {
  let navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00000',
      },
    },
  });
  const logOutHandler = () => {
    logOut(navigate);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Header logOut={logOutHandler} />


      <Box sx={{ flexGrow: 1 }} >
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                {/* <MenuIcon /> */}
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

              </Typography>

            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>




      <Paper style={styles.paperContainer}>
        <Grid container spacing={2} sx={{ m: .1 }} >

          <Grid item xs={3} sx={{ backgroundColor: '', height: 1000 }}>
            <Typography color="common.white">
              <h3 align="center"   >Employee Dashboard</h3>

              <li>Employee</li>
              <li>Employee</li>
              <li>Employee</li>
              <li>Employee</li>
              <li>Employee</li>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequatur ipsa pariatur id. Nihil vero nostrum delectus iste adipisci quasi, earum at voluptates, incidunt eveniet cum excepturi. Sint, reprehenderit dolorem.
            </Typography>
          </Grid>
          <Grid item xs={9} sx={{ backgroundColor: '', }} >
            <Timer>

            </Timer>

            <Box sx={{ minWidth: 200, width: 1000, textAlign: "center", p: 5, m: 5, justifyContent: "center" }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          </Grid>
        </Grid>
      </Paper>




    </ThemeProvider>
  );
}
