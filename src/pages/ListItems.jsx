import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchList } from "../redux/slices/ListItemsSlice";
import ListFoodTable from "../components/ListFoodTable";
const ListItems = ({ url }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.data);
  const fetchData = () => {
    dispatch(fetchList(url));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="sm:pl-[20%]  m-6 ">
      <h1 className="mb-2 text-brand-light text-[1.8rem]"> Food's List</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          {list?.map((item) => (
            <ListFoodTable listitem={item} key={item._id} url={url} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default ListItems;
