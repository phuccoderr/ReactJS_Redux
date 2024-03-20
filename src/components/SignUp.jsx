import React from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Grid,
  Button,
  Link,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const stylesBox = {
  margin: 8,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function SignUp() {
  return (
    <div>
      <Box sx={stylesBox}>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        <Typography>Sign Up</Typography>
        <Box component="form">
          <Grid container spacing={2}>
            <Grid item spacing={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="first Name"
                name="firstName"
              ></TextField>
            </Grid>
            <Grid item spacing={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="last Name"
                name="lastName"
              ></TextField>
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
              ></TextField>
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="password"
                name="password"
              ></TextField>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained">
            Sign up
          </Button>
          <Grid container justifyContent="flex-end">
            <Link href="#" variant="body2">
              Already have an account ? Sign in
            </Link>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default SignUp;
