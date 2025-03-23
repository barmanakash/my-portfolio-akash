import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import img from "../assests/awesom.jpg";
import img2 from "../assests/dark.jpg";

class Portfolio extends Component {
  firstUi = () => {
    return (
      <Box>
        <Box strength={500}>
          <Box style={{ position: "relative", height: "100vh" }}>
            <img
              src={img}
              alt="Background"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              <Typography
                variant="h2"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  marginBottom: "20%",
                }}
              >
                Welcome to My Portfolio - Akash Barman
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container style={{ marginTop: 100 }}>
          <Typography variant="h4" gutterBottom align="center">
            About Me - work in progres
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1" align="center">
                    Hi, I'm a passionate developer with expertise in React and
                    modern web technologies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Box strength={400}>
          <Box style={{ position: "relative", height: "100vh" }}>
            <img
              src={img2}
              alt="Background"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              <Typography
                variant="h2"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
              >
                Projects - work in progres
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container style={{ marginTop: 100, marginBottom: 50 }}>
          <Typography variant="h4" gutterBottom align="center">
            Contact - work in progres
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1" align="center">
                    Feel free to reach out to me at email@example.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  render() {
    return <>{this.firstUi()}</>;
  }
}

export default Portfolio;
