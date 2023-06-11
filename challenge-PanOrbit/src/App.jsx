import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ComingSoon from "./pages/ComingSoon";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ChatBox from "./components/ChatBox";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <>
              <ProfilePage />
              <ChatBox />
            </>
          }
        ></Route>

        <Route
          path="/posts"
          element={
            <>
              <ComingSoon pageName="Posts" />
              <ChatBox />
            </>
          }
        ></Route>

        <Route
          path="/gallery"
          element={
            <>
              <ComingSoon pageName="Gallery" />
              <ChatBox />
            </>
          }
        ></Route>

        <Route
          path="/todo"
          element={
            <>
              <ComingSoon pageName="ToDo" />
              <ChatBox />
            </>
          }
        ></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
