import React from "react";
import profile_icon from "../assets/profile_icon.png";
const Navbar = () => {
  return (
    <>
      <div className="text-black flex items-center justify-between px-4 py-2 text-sm sm:text-lg  w-full  ">
        <div>
          <h1>Foodies</h1>
          <p>Admin Panel</p>
        </div>
        <img src={profile_icon} className="border  px-2 py-1 rounded-full" />
      </div>
      <hr />
    </>
  );
};

export default Navbar;
