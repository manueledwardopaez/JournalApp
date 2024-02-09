import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField, IconButton } from "@mui/material";
import { ImageGallery } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote, startSavingNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, onInputChange, formState, date } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef()

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files))
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <input type="file" multiple onChange={onFileInputChange} ref={fileInputRef}  style={{display: "none"}} />
      <IconButton color="primary" disabled={isSaving} onClick={ () => fileInputRef.current.click() } >
        <UploadOutlined></UploadOutlined>
      </IconButton>

      <Grid item>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={onSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Write a title"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happended today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
