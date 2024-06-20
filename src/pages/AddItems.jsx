import React, { useState } from "react";
import uploadImg from "../assets/uplaod_area.png";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-toastify";
const AddItems = ({ url }) => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Breakfast");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formAddData = new FormData();
    formAddData.append("name", name);
    formAddData.append("description", description);
    formAddData.append("price", Number(price));
    formAddData.append("category", category);
    formAddData.append("image", image);
    const response = await axios.post(`${url}api/food/add`, formAddData);
    console.log(formAddData);
    const success_msg = await response.data.success;
    // setName("");
    if (success_msg) {
      toast.success("Food Added") ;
      setImage(false);

      setName("");
      setDescription("");
      setCategory("Breakfast");

      setPrice("");
    } else {
      toast.error("Food not added");
    }
  };
  return (
    <>
      <div className="w-[80%] sm:ml-[20%] mt-[12%] sm:mt-[0] m-auto">
        <form
          className="border w-[100%] sm:w-[60%] m-auto mt-5 flex flex-col gap-7 bg-green-100 py-5 px-3 font-semibold rounded-[15px]"
          onSubmit={onSubmitHandler}
        >
          <div className="flex  items-center justify-between">
            <h2 className="">Upload Image</h2>
            <label htmlFor="image" className="sm:w-[45%]">
              <img
                src={image ? URL.createObjectURL(image) : uploadImg}
                className="w-[50px] cursor-pointer"
              ></img>
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              id="image"
              hidden
              required
            />
          </div>
          <div className="flex flex-col  sm:items-center sm:justify-between sm:flex-row">
            <h2 className="">Product Name</h2>
            <input
              type="text"
              required
              placeholder="Enter Name"
              name="name"
              className="sm:w-[45%]  border border-green-400 rounded sm:p-2 p-1 text-sm outline-green-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col  sm:items-center sm:justify-between sm:flex-row">
            <h2 className="">Product Description</h2>
            <textarea
              type="text"
              name="description"
              required
              placeholder="Write about your product here"
              className="sm:w-[45%] border border-green-400 rounded  p-1 sm:p-2 text-sm outline-green-500 resize-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col  sm:items-center sm:justify-between sm:flex-row">
            <h2 className="">Product Category</h2>
            <select
              name="category"
              className="sm:w-[45%] border border-green-400 rounded sm:p-2 text-sm font-normal p-1 outline-green-500 "
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Breakfast">BreakFast</option>
              <option value="Lunch">Lunch</option>

              <option value="Dinner">Dinner</option>
              <option value="Snacks">Snacks</option>
            </select>
          </div>
          <div className="flex flex-col  sm:items-center sm:justify-between sm:flex-row">
            <h2 className="">Product Price</h2>
            <input
              type="number"
              required
              placeholder="Enter Price"
              name="price"
              className="sm:w-[45%] border border-green-400 rounded p-1 outline-green-500 sm:p-2 text-sm"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <Button
            property={
              "sm:px-3 sm:py-2 p-1 bg-green-500 text-white m-auto rounded-[15px] "
            }
          >
            Add Product
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddItems;
