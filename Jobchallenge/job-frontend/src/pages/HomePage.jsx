import React, { useEffect, useState } from "react";
import Job from "../components/Job";
import { Container, Snackbar, Typography } from "@mui/material";
import "./HomePage.css";
import Header from "../components/Header";
import JobForm from "../components/JobForm";

function HomePage() {
  const [socket, setSocket] = useState(null);
  const [openToast, setOpenToast] = useState(false);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/job-service/api/v1/ws");

    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      try {
        setJob(json);
        setOpenToast(true);
      } catch (err) {
        console.log(err);
      }
    };
    setSocket(ws);
    return () => {
      ws.close();
    };
  }, []);

  const [job, setJob] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Header handleOpen={handleOpen} />
      <div className="container">
        <Container maxWidth="lg">
          {" "}
          <Job currentJob={job} open={open} />{" "}
        </Container>
        <JobForm handleClose={handleClose} open={open}></JobForm>
        <Snackbar
          open={openToast}
          autoHideDuration={2000}
          onClose={() => {
            setOpenToast(false);
          }}
          message={job?.name + " Status changed to " + job?.status}
        />
      </div>
    </>
  );
}

export default HomePage;
