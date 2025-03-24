import React, { Component } from "react";
import { Typography, Box, styled } from "@mui/material";
import img from "../assests/awesom.jpg";
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
        <Box style={{ marginTop: "5%" }}>
          <Box>
            <Typography variant="h4" align="center">
              {textValues.about}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <Typography> {textValues.aboutMeText}</Typography>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            gap: "100px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "5%",
          }}
        >
          <Box
            style={{ backgroundColor: "red", height: "300px", width: "400px" }}
          >
            <ul>
              <Typography style={{ fontWeight: "700", fontSize: "25px" }}>
                Projects
              </Typography>
              <li>Zoom Notary</li>
              <li>Funds Man</li>
              <li>Etho Suit</li>
              <li>Tour Guid</li>
              <li>Service Internal</li>
            </ul>
          </Box>
          <Box
            style={{
              backgroundColor: "green",
              height: "300px",
              width: "400px",
            }}
          >
            <ul>
              <Typography style={{ fontWeight: "700", fontSize: "25px" }}>
                Skills
              </Typography>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>Node</li>
              <li>JavaScript</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Material UI</li>
              <li>Git/GitLab</li>
              <li>SonarQube</li>
            </ul>
          </Box>
          <Box
            style={{
              backgroundColor: "yellow",
              height: "300px",
              width: "400px",
            }}
          >
            <ul>
              <Typography style={{ fontWeight: "700", fontSize: "25px" }}>
                Educational Details
              </Typography>
              <li>Btech(2017 - 2021)</li>
              <li>Stream - Information Technology</li>
            </ul>
            <ul>
              <li>12th(2015 -2016)</li>
              <li>Subject - Maths</li>
            </ul>
            <ul>
              <li>10th(2014)</li>
            </ul>
          </Box>
        </Box>
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
