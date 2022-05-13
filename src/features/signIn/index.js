import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";
import LoginIcon from '@mui/icons-material/Login';

const theme = createTheme();

export default function SignIn() {
  let navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00000',
      },
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    signIn(navigate, data.get("email"), data.get("password"));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" className="" sx={{ height: "100vh", justifyContent: "center" }}>
        <CssBaseline />
        <Grid
        // item
        // xs={false}
        // sm={4}
        // md={7}
        // sx={{
        //   backgroundImage: "url(https://source.unsplash.com/random)",
        //   backgroundRepeat: "no-repeat",
        //   backgroundColor: (t) =>
        //     t.palette.mode === "light"
        //       ? t.palette.grey[50]
        //       : t.palette.grey[900],
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link color="common.white" href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link color="common.white"
                    component="button"
                    variant="body2"
                    onClick={() => navigate("signUp")}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
