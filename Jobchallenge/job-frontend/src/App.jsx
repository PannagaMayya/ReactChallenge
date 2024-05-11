import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/job-service/api/v1/ws");

    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      console.log("*****************", json);
      try {
        setJob(json.name);
      } catch (err) {
        console.log(err);
      }
    };
    setSocket(ws);
    return () => {
      ws.close();
    };
  }, []);
  const [job, setJob] = useState("");

  return (
    <>
      <div>Hi</div>
      <h1>{job}</h1>
    </>
  );
}

export default App;
