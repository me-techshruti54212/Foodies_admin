import React from 'react'
import { useEffect } from 'react';
import { fetchOrdersList } from '../redux/slices/OrdersListSlice';
import DisplayAnOrder from '../components/DisplayAnOrder';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const OrdersList = ({url}) => {
  const dispatch=useDispatch();
const orders=useSelector((state)=>state.orders.data)
  const fetchOrders=async()=>{
   await dispatch(fetchOrdersList(url))
   console.log(orders)
  }
  useEffect(() => {
    fetchOrders();
  }, []);
  return ( 
  <div className="sm:pl-[20%]  m-6 ">
    <h1 className="mb-2 text-brand-light text-[1.8rem]"> Food's List</h1>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Ordered Items
            </th>
            <th scope="col" className="px-6 py-3">
              Buyer details
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
           
            <th scope="col" className="px-6 py-3">
              Order Status
            </th>
          </tr>
        </thead>

  {orders?.map((order,index)=><DisplayAnOrder order={order} key={index} url={url}/>)}
  </table>
  </div>
  </div>
  )
}

export default OrdersList
