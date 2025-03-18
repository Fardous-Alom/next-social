// /* eslint-disable react/react-in-jsx-scope */
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { RiDeleteBin5Line } from "react-icons/ri";

// const Cart = () => {
//   return (
//     <div className="m-mt_16px">
//       <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">
//         Cart
//       </h1>
//       <div className="pt-p_16px">
//         <div className="lg:flex items-start gap-3">
//           <div className="w-full lg:w-[58%] bg-white border-2">
//             <table className=" overflow-x-auto  w-full">
//               <thead>
//                 <tr className="border-b-4 border-gray-300">
//                   <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
//                     Course
//                   </th>
//                   <th className="text-[14.4px] font-bold p-[7px] text-black">
//                     Price
//                   </th>
//                   <th className="text-[14.4px] font-bold p-[7px] text-black">
//                     Quantity
//                   </th>
//                   <th className="text-[14.4px] font-bold p-[7px] text-black">
//                     Sub Total
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="overflow-x-auto ">
//                 <tr className="border-b border-gray-300 overflow-x-auto">
//                   <td>
//                     <div className="flex items-center justify-center ">
//                       <div className="w-[20%] text-center flex items-center justify-center ">
//                         <RiDeleteBin5Line className="text-xl hover:text-footer_color cursor-pointer" />
//                       </div>
//                       <div className="flex flex-col text-center justify-center items-center py-2  w-[80%]">
//                         <div className="mask">
//                           <img
//                             className="h-[40px] w-[70px]"
//                             src=""
//                             alt="Course"
//                           />
//                         </div>
//                         <p className="text-[14.4px] px-[7px] text-center flex ">
//                           Course name{" "}
//                           <span className="hidden lg:flex ">- unit name</span>
//                         </p>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
//                       discount price
//                     </p>
//                   </td>
//                   <td>
//                     <div className="flex justify-center">
//                       <div className="border">
//                         <button className="px-4 w-[30px] font-bold font_standard my-1.5">
//                           -
//                         </button>
//                       </div>
//                       <div className="border-y">
//                         <input
//                           type="number"
//                           className="font-bold w-[30px] lg:w-[60px] font_standard px-2 text-center mx-auto h-full"
//                         />
//                       </div>
//                       <div className="border">
//                         <button className="px-4 w-[30px] font-bold font_standard my-1.5">
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
//                       discount price * quantity
//                     </p>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="lg:w-[41%] bg-white border-2 ">
//             <div className="px-[30px]">
//               <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
//                 Cart Summary
//               </h2>
//               <div className="py-3 flex justify-between border-b border-gray-300">
//                 <p className="text-black font-bold">Total Price</p>
//                 <p className="text-black font-bold"></p>
//               </div>

//               <Link
//                 to={`/cart/checkout`}
//                 state={"bdt"}
//                 className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
//               >
//                 PROCEED TO CHECKOUT
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Cart = ({ cartItem, setCartItem }) => {
//   const navigate = useNavigate();

//   // Increment quantity
//   const handleIncrement = () => {
//     setCartItem({ ...cartItem, quantity: cartItem.quantity + 1 });
//   };

//   // Decrement quantity or remove item if quantity reaches 1
//   const handleDecrement = () => {
//     if (cartItem.quantity > 1) {
//       setCartItem({ ...cartItem, quantity: cartItem.quantity - 1 });
//     } else {
//       setCartItem(null);
//     }
//   };

//   // Remove item from cart
//   const handleRemove = () => {
//     setCartItem(null);
//   };

//   // Navigate to checkout page
//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   // Calculate total price
//   const totalPrice = cartItem ? cartItem.discount_price * cartItem.quantity : 0;

//   return (
//     <div className="flex flex-col md:flex-row gap-8 p-6 max-w-5xl mx-auto">
//       {/* Left Side - Cart Items */}
//       <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
//         {cartItem ? (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2">Image</th>
//                 <th className="p-2">Course</th>
//                 <th className="p-2">Price</th>
//                 <th className="p-2">Quantity</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2">
//                   <img
//                     src={cartItem.photo}
//                     alt={cartItem.course_name}
//                     className="w-16 h-16 rounded-md"
//                   />
//                 </td>
//                 <td className="p-2">{cartItem.course_name}</td>
//                 <td className="p-2">৳{cartItem.discount_price}</td>
//                 <td className="p-2 flex items-center space-x-2">
//                   <button
//                     onClick={handleDecrement}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md"
//                   >
//                     -
//                   </button>
//                   <span>{cartItem.quantity}</span>
//                   <button
//                     onClick={handleIncrement}
//                     className="bg-green-500 text-white px-3 py-1 rounded-md"
//                   >
//                     +
//                   </button>
//                 </td>
//                 <td className="p-2">
//                   <button
//                     onClick={handleRemove}
//                     className="bg-gray-500 text-white px-3 py-1 rounded-md"
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-600">Your cart is empty.</p>
//         )}
//       </div>

//       {/* Right Side - Cart Summary */}
//       <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
//         {cartItem ? (
//           <div className="space-y-3">
//             <p className="text-lg font-medium">
//               Price: ৳{cartItem.discount_price}
//             </p>
//             <p className="text-lg font-medium">Total: ৳{totalPrice}</p>
//             <button
//               onClick={handleCheckout}
//               className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         ) : (
//           <p className="text-gray-600">No items in cart.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;







import { useCart } from "../../ContextAPIs/CartProvider";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, incrementItem, decrementItem } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.discount_price * item.quantity,
      0
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white shadow rounded-lg"
              >
                <img
                  src={item.photo}
                  alt={item.course_name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold text-lg">{item.course_name}</h3>
                  <p className="text-gray-600">
                    ৳{item.discount_price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                    onClick={() => decrementItem(item.id)}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    className="bg-green-500 text-white px-3 py-2 rounded-lg"
                    onClick={() => incrementItem(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-lg font-semibold">
            Total: <span className="text-green-600">৳{calculateTotal()}</span>
          </div>

          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
