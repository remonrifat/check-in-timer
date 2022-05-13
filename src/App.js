import { Route, Routes } from "react-router-dom";
import Home from "./features/home";
import SignIn from "./features/signIn";
import SignUp from "./features/signUp";
import * as React from "react";

function App() {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}

export default App;
