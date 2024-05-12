import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import JobForm from "./JobForm";

function Header({ handleOpen }) {
  return (
    <div className="homepage-header">
      <Typography variant="h4">Job Scheduler</Typography>
      <button className="button-create-job" onClick={handleOpen}>
        + Create Job
      </button>
    </div>
  );
}

export default Header;
