import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JobForm({ handleClose, open }) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(1);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            SubmitJob(name, duration);
            handleClose();
            setName("");
            setDuration(1);
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Job
          </Typography>
          <br />
          <FormControl>
            <InputLabel htmlFor="job-name">Job Name</InputLabel>
            <Input
              id="job-name"
              aria-describedby="job-name-helper-text"
              required={true}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormHelperText id="job-name-helper-text">
              Atleast one character required
            </FormHelperText>
          </FormControl>
          <br />
          <br />
          <FormControl>
            <InputLabel htmlFor="job-duration">
              Job Duration (seconds)
            </InputLabel>
            <Input
              id="job-duration"
              aria-describedby="job-duration-helper-text"
              type="number"
              required={true}
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value);
              }}
            />
            <FormHelperText id="job-duration-helper-text">
              Minimum 1 second
            </FormHelperText>
          </FormControl>
          <br />
          <br />
          <button className="button-create-job" type="submit">
            Create
          </button>
        </Box>
      </Modal>
    </div>
  );
}

const SubmitJob = (name, duration) => {
  axios
    .post("http://localhost:8080/job-service/api/v1/job", {
      name: name,
      duration: duration * 1000000000,
    })
    .then((response) => {
      console.log(response.data);
      return response.data?.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
