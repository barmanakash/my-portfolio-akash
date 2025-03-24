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
import { textValues } from "../text";

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
                {textValues.header}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container sx={{ marginTop: 10, maxWidth: "100%" }}>
          <Typography variant="h4" gutterBottom align="center">
            {textValues.about}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8} md={6}>
              <Box className="animatedborder">
                <CardContent>
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      fontFamily: "sans-serif",
                      fontSize: "18px",
                    }}
                    variant="body1"
                    align="center"
                  >
                    {textValues.aboutMeText}
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
                {textValues.Projecttext}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container sx={{ marginTop: 10, marginBottom: 5, maxWidth: "100%" }}>
          <Typography variant="h4" gutterBottom align="center">
            {textValues.ContactText}
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
                    {textValues.contactous}
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
