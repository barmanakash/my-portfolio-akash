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
          ></Box>
          <Box
            style={{
              backgroundColor: "green",
              height: "300px",
              width: "400px",
            }}
          ></Box>
          <Box
            style={{
              backgroundColor: "yellow",
              height: "300px",
              width: "400px",
            }}
          ></Box>
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
