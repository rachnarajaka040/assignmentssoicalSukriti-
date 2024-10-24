import "./App.css";
import Login from "./Com/Login";
import LandingPage from "./Com/LandingPage";
import Signup from "./Com/Signup";
import UserData from "./Com/UserData";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </div>
  );
}

export default App;
