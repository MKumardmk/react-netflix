import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {/* <h1 className="text-white" >hello workd</h1> */}
    </div>
  );
}

export default App;
