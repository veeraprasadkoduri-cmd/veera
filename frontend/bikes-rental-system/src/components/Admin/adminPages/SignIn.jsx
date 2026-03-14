import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { useFormik } from "formik";
import * as Yup from "yup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Rental Bikes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const [remember, setRemember] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
      remember: remember
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email!")
        .matches(
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          "Invalid email format"
        )
        .required("Email required!"),
      password: Yup.string()
        .min(3, "Password to short!")
        .max(50, "Password to long!")
        .required("Password required!"),
      role: Yup.string().required("Role required!")
    }),
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      resetForm();
    }
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/02/82/17/81/1000_F_282178195_TMZ6gGFYN0uq1dMJxV8MR29CaAmYRSdl.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              error={
                Boolean(formik.touched.email) && Boolean(formik.errors.email)
              }
              color={!formik.errors.email ? "success" : ""}
              focused={!formik.errors.email}
              required
              fullWidth
              id="email"
              label={
                formik.touched.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : "Email Address"
              }
              placeholder="john.doe@example.com"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.onChange}
              value={formik.values.email}
              {...formik.getFieldProps("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              error={
                Boolean(formik.touched.password) &&
                Boolean(formik.errors.password)
              }
              color={!formik.errors.password ? "success" : ""}
              focused={!formik.errors.password}
              name="password"
              label={
                formik.touched.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : "password"
              }
              placeholder="type password..."
              type="password"
              id="password"
              onChange={formik.onChange}
              value={formik.values.password}
              {...formik.getFieldProps("password")}
            />
            <FormControl sx={{ mt: 2, width: "120px" }}>
              <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                error={
                  Boolean(formik.touched.role) && Boolean(formik.errors.role)
                }
                id="role"
                name="role"
                label="role"
                onChange={formik.handleChange}
                value={formik.values.role}
                {...formik.getFieldProps("role")}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
              {Boolean(formik.touched.role) && Boolean(formik.errors.role) && (
                <FormHelperText sx={{ color: "red" }}>
                  Select a role
                </FormHelperText>
              )}
            </FormControl>
            <FormGroup>
              <FormControlLabel
                sx={{
                  mt: 2
                }}
                control={
                  <Checkbox
                    checked={remember}
                    color="primary"
                    name="remember"
                    id="remember"
                    onClick={() => setRemember((value) => !value)}
                    {...formik.getFieldProps("remember")}
                  />
                }
                label="Remember me"
              />
            </FormGroup>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="buttonRed"
              disabled={!(formik.isValid && formik.dirty)}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
