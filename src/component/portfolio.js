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
          <Box>
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: "20px" }}
            >
              {textValues.experience}
            </Typography>
          </Box>
          <Box className="aboutstyleexp">
            <Typography>
              SVAM International inc. Noida (Present from August 2025)
            </Typography>
            <Typography>
              DXC Technology Bangaluru karnataka (February 2022 - May 2023)
            </Typography>
            <Typography>
              IGT Solutions Pune Maharashtra (December 2021 - January 2023)
            </Typography>
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
    background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    minHeight: "100vh",
    fontFamily: "'Fira Code', 'Roboto Mono', 'Consolas', monospace",
    color: "#e0e0e0",
  },
  "& .animatedborder": {
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    border: "3px solid #00e0ff",
    borderRadius: "18px",
    padding: "18px",
    width: "90%",
    margin: "auto",
    boxShadow: "0 4px 24px rgba(0,224,255,0.08)",
  },
  "& .firstimagebox": {
    position: "relative",
    height: "60vh",
    overflow: "hidden",
    borderRadius: "30px",
    boxShadow: "0 4px 24px rgba(0,224,255,0.10)",
    marginBottom: "30px",
    background: "linear-gradient(120deg, #232526 60%, #00e0ff 100%)",
  },
  "& .firstimgstyle": {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.5) blur(1px)",
    borderRadius: "30px",
    opacity: 0.7,
  },
  "& .imgsecstyle": {
    position: "absolute",
    width: "140px",
    height: "140px",
    objectFit: "cover",
    borderRadius: "70px",
    right: "40px",
    top: "40px",
    border: "4px solid #00e0ff",
    boxShadow: "0 2px 16px rgba(0,224,255,0.18)",
    background: "#232526",
  },
  "& .nametxt": {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#00e0ff",
    background: "rgba(35,37,38,0.7)",
    textAlign: "center",
    padding: "0 20px",
    fontWeight: "800",
    letterSpacing: "2px",
    fontSize: "2.8rem",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
    textShadow: "0 2px 12px #00e0ff",
  },
  "& .textvaluestyle": {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    marginBottom: "10%",
    textShadow: "0 2px 12px #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
    fontWeight: 900,
  },
  "& .boxsx": {
    marginTop: "2%",
    background: "rgba(35,37,38,0.95)",
    borderRadius: "20px",
    boxShadow: "0 2px 12px rgba(0,224,255,0.07)",
    padding: "30px 20px",
    marginBottom: "30px",
    border: "1px solid #00e0ff",
  },
  "& .aboutstyle": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    fontFamily: "'Roboto Mono', monospace",
    textAlign: "center",
    color: "#b2ebf2",
    fontSize: "1.25rem",
    fontWeight: 500,
  },
  "& .prbox": {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "3%",
  },
  "& .chbox": {
    backgroundColor: "#232526",
    color: "#00e0ff",
    height: "260px",
    width: "320px",
    borderRadius: "30px",
    boxShadow: "0 2px 12px rgba(0,224,255,0.15)",
    padding: "20px",
    border: "2px solid #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
  },
  "& .projectsbox": {
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: "10px",
    letterSpacing: "1px",
    color: "#fff",
    textShadow: "0 2px 8px #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
  },
  "& .skillsbox": {
    backgroundColor: "#232526",
    color: "#00e0ff",
    height: "260px",
    width: "320px",
    borderRadius: "30px",
    boxShadow: "0 2px 12px rgba(0,224,255,0.15)",
    padding: "20px",
    border: "2px solid #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
  },
  "& .headskillsstyle": {
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: "10px",
    letterSpacing: "1px",
    color: "#fff",
    textShadow: "0 2px 8px #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
  },
  "& .edustyle": {
    backgroundColor: "#232526",
    color: "#00e0ff",
    height: "260px",
    width: "320px",
    borderRadius: "30px",
    boxShadow: "0 2px 12px rgba(0,224,255,0.15)",
    padding: "20px",
    border: "2px solid #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
  },
  "& .typstyle": {
    fontWeight: "700",
    fontSize: "22px",
    marginBottom: "10px",
    letterSpacing: "1px",
    color: "#fff",
    textShadow: "0 2px 8px #00e0ff",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
  },
  "& .contactbox": {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    width: "100%",
    flexWrap: "wrap",
    marginTop: "40px",
    marginBottom: "30px",
    background: "rgba(35,37,38,0.95)",
    borderRadius: "20px",
    boxShadow: "0 2px 12px rgba(0,224,255,0.07)",
    padding: "20px 0",
    border: "1px solid #00e0ff",
  },
  "& .commonbox": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.15rem",
    color: "#00e0ff",
    fontWeight: "600",
    fontFamily: "'Fira Code', 'Roboto Mono', monospace",
    letterSpacing: "1px",
  },
  "& .aboutstyleexp": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    fontFamily: "'Roboto Mono', monospace",
    textAlign: "center",
    marginTop: "20px",
    flexDirection: "column",
    color: "#b2ebf2",
    fontSize: "1.1rem",
    fontWeight: 500,
  },
});
