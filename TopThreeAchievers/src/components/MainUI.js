import React, { useState, useEffect } from "react";
import "./customUI/MainUI.css";
import Toppers from "./Toppers";
import ShowToppers from "./ShowToppers";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ClassIcon from "@material-ui/icons/Class";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function MainUI() {
  const classes = useStyles();

  const [classname, setClassname] = useState("");
  const [input, setInput] = useState("");
  const [studentsList, setStudentsList] = useState([]);
  const [classArray, setClassArray] = useState([]);

  let classSet = new Set();

  useEffect(() => {
    if (studentsList !== []) {
      studentsList.map((student) => {
        classSet.add(student.studentInfo.class);
      });
    }
    convertToArray(classSet);
  }, [input, classname]);

  const convertToArray = (classSet) => {
    setClassArray(Array.from(classSet));
  };

  return (
    <div className="mainUI">
      <form className="mainUI__form">
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <ClassIcon />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Class Name"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={(e) => {
            e.preventDefault();
            setClassname(input.toLowerCase());
          }}
        >
          Submit
        </Button>

        {/* Hidden Button to give "ENTER" key functionality */}
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setClassname(input.toLowerCase());
          }}
          style={{ display: "none" }}
        />
      </form>
      <Toppers setStudentsList={setStudentsList} />
      {classname && (
        <ShowToppers
          studentsList={studentsList}
          classname={classname}
          classArray={classArray}
        />
      )}
    </div>
  );
}

export default MainUI;
