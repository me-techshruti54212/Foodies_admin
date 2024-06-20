import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
const Sidebar = () => {
  return (
   
    <div className="sm:w-[20%] sm:border-r-2 sm:h-[85%]  border-brand-dark absolute w-full">
      <div className="flex sm:flex-col sm:justify-around justify-between sm:mt-12  text-sm sm:text-lg sm:gap-7 ">
        <NavLink to="/add">
          <div className="border border-green-300 flex items-center gap-1 sm:gap-3 hover:bg-green-500 hover:text-white cursor-pointer sm:ml-2 sm:p-1">
            <AiOutlinePlusCircle size={32} className="hidden  sm:block" />
            <h2 className="p-1">Add Items</h2>
          </div>
        </NavLink>
        <NavLink to="/list">
          <div className="border border-green-300 sm:p-1 gap-1 flex items-center sm:gap-3 hover:bg-green-500 hover:text-white cursor-pointer sm:ml-2">
            <AiOutlineUnorderedList size={26} className="hidden  sm:block" />
            <h2 className="p-1">List All Items</h2>
          </div>
        </NavLink>
        <NavLink to="/orders">
          <div className="border hover:bg-green-500 hover:text-white border-green-300 sm:p-1  flex items-center  sm:gap-3 cursor-pointer  sm:ml-2 gap-1">
            <AiOutlineDeliveredProcedure
              size={30}
              className="hidden  sm:block"
            />
            <h2 className="p-1">Order's List</h2>
          </div>
        </NavLink>
      </div>
    </div>
  
  
  );
};

export default Sidebar;

