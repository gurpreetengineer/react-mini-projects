import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Formik, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { db } from "./firebase/firebase";
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function CustomField({ ...props }) {
  // const [field, meta, helpers] = useField(props);
  const [field] = useField(props);
  return (
    <TextField
      {...field}
      {...props}
      id="outlined-helperText"
      label="Jot Down Here..."
      helperText="Note cannot be empty!"
      variant="outlined"
      type="text"
    />
  );
}

function MakeNote({ sendState, setSendState }) {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  const NoteValidatorSchema = Yup.object().shape({
    input: Yup.string().required("Fella, it's empty!"),
  });

  const handleNotePush = (values, onSubmitProps) => {
    setTodos([...todos, values.input]);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();

    db.collection("Notes").add({
      note: values.input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setSendState(sendState + 1);
  };

  return (
    <div>
      <Formik
        initialValues={{ input: "" }}
        validationSchema={NoteValidatorSchema}
        onSubmit={handleNotePush}
      >
        <Form>
          <CustomField name="input" type="text" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
          <ErrorMessage name="input" />
        </Form>
      </Formik>
    </div>
  );
}

export default MakeNote;
