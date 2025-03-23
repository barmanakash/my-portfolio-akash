import React, { Component } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Box,
  styled,
} from "@mui/material";
import img from "../assests/awesom.jpg";
import img2 from "../assests/dark.jpg";
import akash from "../assests/Akash.jpeg";

class Portfolio extends Component {
  firstUi = () => {
    return (
      <StyleBox sx={{ overflowX: "hidden", width: "100vw", maxWidth: "100%" }}>
        <Box strength={500}>
          <Box
            style={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
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
            <img
              src={akash}
              alt="Profile"
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50px",
                right: "10px",
                top: "10px",
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

        <Container sx={{ marginTop: 10, maxWidth: "100%" }}>
          <Typography variant="h4" gutterBottom align="center">
            About Me - work in progress
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={6}>
              <Box className="animatedborder">
                <CardContent>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                    variant="body1"
                    align="center"
                  >
                    I am a passionate developer with expertise in React and
                    modern web technologies. I enjoy building efficient and
                    scalable web applications, with a strong focus on frontend
                    frameworks and state management. Staying updated with the
                    latest industry trends is a priority for me, and I emphasize
                    performance optimization and clean coding. With solid
                    experience in APIs and backend integration, I believe in
                    solving complex problems with creative solutions. Teamwork
                    and collaboration are integral to my workflow, and I am
                    always eager to learn new things and enhance my development
                    skills.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box strength={400}>
          <Box
            style={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
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
                Projects - work in progress
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container sx={{ marginTop: 10, marginBottom: 5, maxWidth: "100%" }}>
          <Typography variant="h4" gutterBottom align="center">
            Contact - work in progress
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Card>
                <CardContent>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ width: "auto" }}
                  >
                    Feel free to reach out to me at 1998akashbarman@gmail.com
                    and +91 626108194
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </StyleBox>
    );
  };

  render() {
    return <>{this.firstUi()}</>;
  }
}

export default Portfolio;

const StyleBox = styled(Box)({
  "& .animatedborder": {
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    border: "5px solid transparent",
    borderRadius: "10px",
    padding: "10px",
    width: "200%",
  },
});
