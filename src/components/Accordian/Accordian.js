import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useColorMode } from '@docusaurus/theme-common';
import "./Accordian.css";
import { data } from "./data";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
    margin: "1rem auto",
  },
  heading: {
    fontSize: 15,
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: 15,
    color: "#1C1E21",
  },
  accord: {
    color: "#1C1E21",
    //   background:
    //     "linear-gradient(15deg, rgb(55, 62, 75) 0%, rgb(33, 35, 43) 60%)",
    transition: "all 0.3s ease-in-out",
  },
}));

const Accordian = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //   console.log(questions);
  return (
    <ThemeProvider theme={theme}>
    <>
      <div className="faq">
        <div className="faq-block">
          <h2 className="accord-title">Get started with your thing.</h2>
          {React.Children.toArray(
            data.map((item) => {
              return (
                <>
                  <div className="accordian-container">
                    <Accordion
                      className={`accord-dark ${classes.accord}`}
                      expanded={expanded === item.panel}
                      onChange={handleChange(`${item.panel}`)}
                      style={{
                        margin: "0",
                        border: "1px solid #CECECE",
                      }}
                    >
                      <div
                        className={useColorMode().colorMode == "dark" ? "accord-dark" : "accord-light"}
                      >
                        <AccordionSummary
                          style={{ color: "#1C1E21" }}
                          expandIcon={
                            <div
                              className={
                                useColorMode().colorMode == "dark" ? "accord-dark" : "accord-light"
                              }
                            >
                              <MdKeyboardArrowUp
                                style={{ color: "#c60043", fontSize: "27px" }}
                              />
                            </div>
                          }
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <h3 className="faq-question">
                            &nbsp; &nbsp;{item.question}
                          </h3>
                        </AccordionSummary>
                      </div>
                      <div className={useColorMode().colorMode == "dark" ? "accord-dark" : null}>
                        <AccordionDetails>
                          <Typography style={{ color: "#1C1E21" }} component="span">
                            <div id={useColorMode().colorMode == "dark" ? "white-text" : null}>
                              &nbsp; &nbsp;{item.answer}
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </div>
                    </Accordion>
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
    </ThemeProvider>
  );
};

export default Accordian;
