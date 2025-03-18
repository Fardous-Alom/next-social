// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../ContextAPIs/CartProvider";

// const CourseCard = ({ course, cartItem, setCartItem }) => {
//    const navigate = useNavigate();

//   const {
//     id,
//     photo,
//     course_name,
//     trainer_data,
//     regular_price,
//     discount_price,
//   } = course;

//   const discountPercentage = Math.round(
//     ((regular_price - discount_price) / regular_price) * 100
//   );

//   const handleAddToCart = () => {
//     if (!cartItem) {
//       setCartItem({ ...course, quantity: 1 });
//     }
//   };

//   const handleIncrement = () => {
//     if (cartItem?.id === id) {
//       setCartItem({ ...cartItem, quantity: cartItem.quantity + 1 });
//     }
//   };

//   const handleDecrement = () => {
//     if (cartItem?.id === id && cartItem.quantity > 1) {
//       setCartItem({ ...cartItem, quantity: cartItem.quantity - 1 });
//     } else if (cartItem?.id === id && cartItem.quantity === 1) {
//       setCartItem(null);
//     }
//   };

//   return (
//     <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 w-80">
//       <img
//         src={photo}
//         alt={course_name}
//         className="w-full object-cover rounded-lg"
//       />
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold text-gray-800">{course_name}</h2>
//         <p className="text-sm text-gray-600">
//           Trainer:{" "}
//           <span className="text-gray-600">
//             {trainer_data?.name || "Unknown"}
//           </span>
//         </p>
//         <div className="mt-2 flex items-center space-x-2">
//           <span className="text-gray-400 line-through text-lg">
//             ৳{regular_price}
//           </span>
//           <span className="text-green-600 text-lg font-bold">
//             ৳{discount_price}
//           </span>
//           <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
//             {discountPercentage}% OFF
//           </span>
//         </div>
//         {cartItem?.id === id ? (
//           <div>
//             <div className="mt-4 flex items-center justify-between">
//               <button
//                 className="bg-red-500 text-white px-3 py-2 rounded-lg"
//                 onClick={handleDecrement}
//               >
//                 -
//               </button>
//               <span className="text-lg font-semibold">{cartItem.quantity}</span>
//               <button
//                 className="bg-green-500 text-white px-3 py-2 rounded-lg"
//                 onClick={handleIncrement}
//               >
//                 +
//               </button>
//             </div>
//             <button
//               className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => navigate("/cart")}
//             >
//               Go to Cart
//             </button>
//           </div>
//         ) : (
//           <button
//             className={`mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition ${
//               cartItem ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             onClick={handleAddToCart}
//             disabled={!!cartItem}
//           >
//             Add to Cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cartItem, setCartItem] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch("https://itder.com/api/get-course-list");
//         const data = await response.json();
//         if (data.status_code === 201) {
//           setCourses(data.courseData);
//         }
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-6 justify-center p-6">
//       {loading ? (
//         <p>Loading courses...</p>
//       ) : (
//         courses.map((course) => (
//           <CourseCard
//             key={course.id}
//             course={course}
//             cartItem={cartItem}
//             setCartItem={setCartItem}
//           />
//         ))
//       )}
//     </div>
//   );
// };

// export default CourseList;







import { useEffect, useState } from "react";
import CourseCard from "../.././components/CourseCard";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://itder.com/api/get-course-list");
        const data = await response.json();
        if (data.status_code === 201) {
          setCourses(data.courseData);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {loading ? (
        <p>Loading courses...</p>
      ) : (
        courses.map((course) => <CourseCard key={course.id} course={course} />)
      )}
    </div>
  );
};

export default CourseList;
