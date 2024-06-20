import React, { useState } from 'react'
import axios from 'axios'
const DisplayAnOrder = ({order,url}) => {
    const [orderStatus,setOrderStatus]=useState(order.status)
    const changeStatus=async(e,orderId)=>{
        setOrderStatus(()=>e.target.value);
        const response = await axios.post(`${url}api/order/status`,{
            orderId,
            status:e.target.value
        })
        if(response.data.success)
            {
                console.log("successssss")
            }
            else{
                console.log("faill")
            }

    }
  return (

        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white w-[40%]">
                {order?.items?.map((item) => `${item.name} X ${item.qty} , `)}
                </th>
                <td className="px-6 py-4">
                    {order.address.firstName}&nbsp;{order.address.lastName}
                </td>
                <td className="px-6 py-4">
                ₹{order.amount}
                </td>
                <td className="px-6 py-4" >
                  <select className='px-2 py-2 outline-none border-none' value={orderStatus}  onChange={
                    (e)=>changeStatus(e,order._id)} >
                    <option value="Food Processing">Food Processing</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
            </tr>
        </tbody>
   
  )
}

export default DisplayAnOrder
