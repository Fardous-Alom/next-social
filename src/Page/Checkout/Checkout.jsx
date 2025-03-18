import { useCart } from "../../ContextAPIs/CartProvider";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../ContextAPIs/FormContext";
import { useContext } from "react";
import { AuthContext } from "../../Utils/AuthContext";

const Checkout = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const { cartItems, incrementItem, decrementItem } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.discount_price * item.quantity,
      0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if required fields are filled
    if (!formData.fullName || !formData.parentNumber || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isLoggedIn) {
      alert("You need to be logged in to proceed.");
      return;
    }

    // If all validations pass, navigate to the order details page
    navigate("/order-details");
  };


   const { formData, updateFormData } = useFormContext();
  return (
    <div className="  mt-5 border mx-2">
      <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
        <h2 className="text-5xl font-bold">Trainee Admission Form</h2>
      </div>
      <form
        className="bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        {/* Trainee Information Section */}
        <div className="form-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-semibold text-base mb-2">
                Full Name:
              </label>
              <input
                type="text"
                value={formData.fullName}
                required
                onChange={(e) => updateFormData("fullName", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold text-base mb-2">
                Form No:
              </label>
              <input
                type="text"
                value={formData.formNo}
                onChange={(e) => updateFormData("formNo", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-semibold text-base mb-2">
                Father/Mother Name:
              </label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => updateFormData("parentName", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold text-base mb-2">
                Number:
              </label>
              <input
                type="text"
                value={formData.parentNumber}
                onChange={(e) => updateFormData("parentNumber", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-semibold text-base mb-2">
                School/College:
              </label>
              <input
                type="text"
                value={formData.school}
                onChange={(e) => updateFormData("school", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold text-base mb-2">
                Job Information:
              </label>
              <input
                type="text"
                value={formData.jobInfo}
                onChange={(e) => updateFormData("jobInfo", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-semibold text-base mb-2">
                Email:
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold text-base mb-2">
                Gender:
              </label>
              <select
                value={formData.gender}
                onChange={(e) => updateFormData("gender", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Others">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="m-mt_16px">
          <div className="pt-p_16px">
            <div className="lg:flex items-start gap-3">
              <div className="w-full  bg-white border-2">
                <table className=" overflow-x-auto  w-full">
                  <thead>
                    <tr className="border-b-4 border-gray-300">
                      <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                        Course
                      </th>
                      <th className="text-[14.4px] font-bold p-[7px] text-black">
                        Price
                      </th>
                      <th className="text-[14.4px] font-bold p-[7px] text-black">
                        Quantity
                      </th>
                      <th className="text-[14.4px] font-bold p-[7px] text-black">
                        Sub Total
                      </th>
                    </tr>
                  </thead>
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
                              <h3 className="font-semibold text-lg">
                                {item.course_name}
                              </h3>
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
                              <span className="text-lg font-semibold">
                                {item.quantity}
                              </span>
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
                    </>
                  )}
                </table>
              </div>
              <div className="lg:w-[41%] bg-white border-2 ">
                <div className="px-[30px]">
                  <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                    Cart Summary
                  </h2>
                  <div className="py-3 flex justify-between border-b border-gray-300">
                    <p className="text-black font-bold">Total Price:</p>
                    <span className="text-green-600">৳{calculateTotal()}</span>
                  </div>
                  <button
                    className={`mt-4 w-full py-2 rounded-lg transition ${
                      isLoggedIn
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (isLoggedIn) {
                        navigate("/order-details");
                      }
                    }}
                    disabled={!isLoggedIn}
                    type="submit"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
