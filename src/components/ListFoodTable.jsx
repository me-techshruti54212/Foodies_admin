import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { fetchList } from "../redux/slices/ListItemsSlice";
const ListFoodTable = ({ listitem, url }) => {
  const dispatch = useDispatch();
  const deleteItem = async (foodId) => {
    const response = await axios.post(`${url}/api/food/removefood`, {
      id: foodId,
    });
    await dispatch(fetchList(url));
    if (response.data.success) {
      toast.success("Food Removed");
    } else {
      toast.error("Some error occured");
    }
  };
  return (
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            src={`${url}/images/${listitem.image}`}
            className="w-[50px] h-[50px] rounded-[10px]"
            alt="image"
          />
        </th>
        <td className="px-6 py-4">{listitem.name}</td>
        <td className="px-6 py-4">{listitem.category}</td>
        <td className="px-6 py-4">${listitem.price}</td>
        <td className="px-6 py-4">
          <AiOutlineDelete
            size={18}
            className="hover:cursor-pointer"
            onClick={() => deleteItem(listitem._id)}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default ListFoodTable;
