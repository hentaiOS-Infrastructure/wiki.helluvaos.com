import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./Accordian.css";
import { data } from "./data";

const useStyles = makeStyles(theme => ({
  root: {
    width: "65%",
    margin: "1rem auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
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

  const handleChange = panel => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //   console.log(questions);
  return (
    <>
      <div className="faq">
        <div className="faq-block">
          <h2 className="accord-title">Get started with your thing.</h2>
          {data.map(item => {
            return (
              <>
                <Accordion
                  className={`accord-dark ${classes.accord}`}
                  expanded={expanded === item.panel}
                  onChange={handleChange(`${item.panel}`)}
                  style={{
                    margin: "0",
                    border: "1px solid #CECECE",
                  }}
                >
                  <AccordionSummary
                    style={{ color: "#1C1E21" }}
                    expandIcon={
                      <MdKeyboardArrowUp
                        style={{ color: "#1C1E21", fontSize: "27px" }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h3 className="faq-question">
                      <i
                        className="fa fa-question-circle"
                        aria-hidden="true"
                      ></i>
                      &nbsp; &nbsp;{item.question}
                    </h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ color: "#1C1E21" }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
