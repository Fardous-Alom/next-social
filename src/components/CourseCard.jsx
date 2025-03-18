import { useNavigate } from "react-router-dom";
import { useCart } from "../ContextAPIs/CartProvider";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { cartItems, addToCart, incrementItem, decrementItem } = useCart();

  const cartItem = cartItems.find((item) => item.id === course.id);
  const {
    id,
    photo,
    course_name,
    trainer_data,
    regular_price,
    discount_price,
  } = course;

  const discountPercentage = Math.round(
    ((regular_price - discount_price) / regular_price) * 100
  );

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 w-80">
      <img
        src={photo}
        alt={course_name}
        className="w-full object-cover rounded-lg"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{course_name}</h2>
        <p className="text-sm text-gray-600">
          Trainer:{" "}
          <span className="text-gray-600">
            {trainer_data?.name || "Unknown"}
          </span>
        </p>
        <div className="mt-2 flex items-center space-x-2">
          <span className="text-gray-400 line-through text-lg">
            ৳{regular_price}
          </span>
          <span className="text-green-600 text-lg font-bold">
            ৳{discount_price}
          </span>
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
            {discountPercentage}% OFF
          </span>
        </div>
        {cartItem ? (
          <div>
            <div className="mt-4 flex items-center justify-between">
              <button
                className="bg-red-500 text-white px-3 py-2 rounded-lg"
                onClick={() => decrementItem(id)}
              >
                -
              </button>
              <span className="text-lg font-semibold">{cartItem.quantity}</span>
              <button
                className="bg-green-500 text-white px-3 py-2 rounded-lg"
                onClick={() => incrementItem(id)}
              >
                +
              </button>
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          </div>
        ) : (
          <button
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => addToCart(course)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
