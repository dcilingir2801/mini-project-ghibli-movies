import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import bcryptjs from "bcryptjs-react";
import { useEffect } from "react";
import useAuth from "/src/hooks/useAuth";
//import Loading from "../../components/Loading";

export default function SignInPage({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const {
    data: users,
    error,
    //loading,
    handleFetch,
  } = useAuth({ endPoint: "/users" });

  useEffect(() => {
    handleFetch();
  }, []);

  if (error) return <div>error!</div>;
  // if (loading) return <Loading />;
  console.log(users);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqBody = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const { email, password } = reqBody;
    const foundUser = users.find((u) => u.email === email);
    console.log(foundUser);
    if (!email || !password || !foundUser) return;

    try {
      const passwordMatch = await bcryptjs.compare(
        password,
        foundUser.password
      );
      if (passwordMatch) {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        localStorage.setItem("userId", foundUser.id);
        console.log("user is authenticated!");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const passwordMatch = await bcryptjs.compare(
        password,
        foundUser.password
      );
      if (passwordMatch) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
