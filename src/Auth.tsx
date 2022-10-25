import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

const theme = createTheme();

export function Auth({ setAuth }: any) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setAuth(data.get("password"));
  };

  const [{ days, hours, minutes, seconds }, setDate] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function timer() {
    const start: any = new Date("2021/12/18");
    const t = (new Date() as any) - start;
    let h: any = ~~((t / 1000 / 60 / 60) % 24);
    if (h < 10) {
      h = "0" + h;
    }
    let m: any = ~~((t / 1000 / 60) % 60);
    if (m < 10) {
      m = "0" + m;
    }

    let s: any = ~~((t / 1000) % 60);
    if (s < 10) {
      s = "0" + s;
    }
    setDate({
      days: ~~(t / 1000 / 60 / 60 / 24),
      hours: h,
      minutes: m,
      seconds: s,
    });
    // document.getElementById("d").innerHTML = ~~(t / 1000 / 60 / 60 / 24);
    // document.getElementById("h").innerHTML = h;
    // document.getElementById("m").innerHTML = m;
    // document.getElementById("s").innerHTML = s;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      timer();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
              Confirm
            </Button>
          </Box>
          <Typography component="h2">PIPI，我们已经在一起</Typography>
          <Typography>
            {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
