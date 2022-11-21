import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate= useNavigate()

  const handleChange=async()=>{
   await navigate('/login')
  }
  return (
    <div className="flex items-center justify-between p-4 absolute w-full">
      <Link to={"/"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to={"/login"}>
          <button className="text-white pr-4">Sign In</button>
        </Link>
          <button onClick={handleChange} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Out
          </button>
      </div>
    </div>
  );
};

export default Navbar;
