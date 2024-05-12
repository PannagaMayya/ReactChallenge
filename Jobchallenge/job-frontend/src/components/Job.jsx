import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Alert } from "@mui/material";
import "./Job.css";
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "duration", label: "Duration(in seconds)", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
];

export default function Job({ currentJob }) {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/job-service/api/v1/jobs")
      .then((response) => {
        console.log(response.data.data);
        setRows(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentJob]);
  return (
    <Paper
      sx={{
        width: "70%",
        overflow: "hidden",
        alignContent: "center",
        margin: "auto",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className="job-header"
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {rows.length > 0 ? (
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id == "status" ? (
                            <Alert
                              severity={
                                value == "pending"
                                  ? "info"
                                  : value == "running"
                                  ? "warning"
                                  : "success"
                              }
                            >
                              {value}
                            </Alert>
                          ) : column.id == "duration" ? (
                            value / 1000000000
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            <>Loading...</>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
}
