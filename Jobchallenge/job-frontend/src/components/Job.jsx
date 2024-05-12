import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Alert, LinearProgress } from "@mui/material";
import "./Job.css";
const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "duration", label: "Duration (in seconds)", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100 },
];
const statusTypes = {
  pending: {
    severity: "info",
    style: { backgroundColor: "#fffaf0" },
  },
  complete: {
    severity: "success",
    style: { backgroundColor: "#f8f8ff" },
  },
  running: {
    severity: "warning",
    style: { backgroundColor: "#ffebee" },
  },
};
export default function Job({ currentJob, open }) {
  const [rows, setRows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/job-service/api/v1/jobs")
      .then((response) => {
        setRows(response.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        currentJob &&
          currentJob?.id &&
          document.getElementById(currentJob?.id).scrollIntoView();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentJob, open]);
  return (
    <Paper
      sx={{
        width: "70%",
        overflow: "hidden",
        alignContent: "center",
        margin: "auto",
        boxShadow: "2px 6px 12px #80cbc4",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
        }}
      >
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

          <TableBody style={{ cursor: "pointer" }}>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            ) : rows && rows.length > 0 ? (
              rows.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    id={row.id}
                    sx={statusTypes[row["status"]].style}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={
                            column.id == "name" ? { fontWeight: "600" } : null
                          }
                        >
                          {column.id == "status" ? (
                            <Alert
                              color={statusTypes[value].severity}
                              sx={{
                                border: "1px solid #536dfe",
                                boxShadow: "2px 3px 3px #80cbc4",
                                textTransform: "capitalize",
                              }}
                              severity={statusTypes[value].severity}
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
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    fontSize: "20px",
                  }}
                >
                  No data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
