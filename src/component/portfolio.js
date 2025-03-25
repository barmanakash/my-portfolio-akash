import React, { Component } from "react";
import { Typography, Box, styled } from "@mui/material";
import img from "../assests/awesom.jpg";
import akash from "../assests/Akash.jpeg";
import { textValues } from "../text";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";

class Portfolio extends Component {
  firstUi = () => {
    return (
      <StyleBox className="Headertxt">
        <Box strength={500}>
          <Box className="firstimagebox">
            <img src={img} alt="Background" className="firstimgstyle" />
            <img src={akash} alt="Profile" className="imgsecstyle" />
            <Box className="nametxt">
              <Typography variant="h2" className="textvaluestyle">
                {textValues.header}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="boxsx">
          <Box>
            <Typography variant="h4" align="center">
              {textValues.about}
            </Typography>
          </Box>
          <Box className="aboutstyle">
            <Typography> {textValues.aboutMeText}</Typography>
          </Box>
        </Box>
        <Box className="prbox">
          <Box className="chbox">
            <ul>
              <Typography className="projectsbox">Projects</Typography>
              <li>Zoom Notary</li>
              <li>Funds Man</li>
              <li>Etho Suit</li>
              <li>Tour Guid</li>
              <li>Service Internal</li>
            </ul>
          </Box>
          <Box className="skillsbox">
            <ul>
              <Typography className="headskillsstyle">Skills</Typography>
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
          <Box className="edustyle">
            <ul>
              <Typography className="typstyle">Educational Details</Typography>
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
        <Box className="contactbox">
          <Box className="commonbox">
            <CallIcon />
            <Typography>+916261081914</Typography>
          </Box>
          <Box className="commonbox">
            <MailOutlineIcon />
            <Typography>1998akashbarman@gmail.com</Typography>
          </Box>
          <Box className="commonbox">
            <HomeIcon />
            <Typography>Jabalpur Madhya Pradesh Bharat.</Typography>
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
  "& .Headertxt": {
    overflowX: "hidden",
    width: "100vw",
    maxWidth: "100%",
  },
  "& .animatedborder": {
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    border: "5px solid transparent",
    borderRadius: "10px",
    padding: "10px",
    width: "200%",
  },
  "& .firstimagebox": {
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  "& .firstimgstyle": {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "& .imgsecstyle": {
    position: "absolute",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50px",
    right: "10px",
    top: "10px",
  },
  "& .nametxt": {
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
  },
  "& .textvaluestyle": {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginBottom: "20%",
  },
  "& .boxsx": {
    marginTop: "5%",
  },
  "& .aboutstyle": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
    fontFamil: "Arial, sans-serif",
    border: "2px solid gray",
    textAlign: "center",
  },
  "& .prbox": {
    display: "flex",
    gap: "50px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "5%",
  },
  "& .chbox": {
    backgroundColor: "#7a0080",
    height: "300px",
    width: "400px",
    borderRadius: "20px 100px",
  },
  "& .projectsbox": {
    fontWeight: "700",
    fontSize: "25px",
  },
  "& .skillsbox": {
    backgroundColor: "green",
    height: "300px",
    width: "400px",
    borderRadius: "20px 100px",
  },
  "& .headskillsstyle": {
    fontWeight: "700",
    fontSize: "25px",
  },
  "& .edustyle": {
    backgroundColor: "yellow",
    height: "300px",
    width: "400px",
    borderRadius: "20px 100px",
  },
  "& .typstyle": {
    fontWeight: "700",
    fontSize: "25px",
  },
  "& .contactbox": {
    display: "flex",
    justifyContent: "center",
    height: "20px",
    gap: "50px",
    width: "100%",
    flexWrap: "wrap",
    marginTop: "30px",
    marginBottom: "20px",
  },
  "& .commonbox": {
    display: "flex",
  },
});
