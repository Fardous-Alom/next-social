// import TrackOrder from "./TrackOrder";
import { useCart } from "../../ContextAPIs/CartProvider";
import { useFormContext } from "../../ContextAPIs/FormContext";

const OrderDetails = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.discount_price * item.quantity,
      0
    );
  };
  
  const { formData } = useFormContext(); // Access the form data from context
  console.log(formData)

  return (
    <div className=" m-mt_16px">
      <div className="w-full flex flex-col lg:flex-row items-start justify-center h-full gap-2 ">
        <div className="bg-white lg:p-p_30px w-full  ">
          <div className="text-center  flex flex-col justify-center items-center ">
            <p className="text-xl font-bold">Order Details</p>
            {/* <p className="p-3 rounded-md lg:my-2 my-1 w-fit border bg-[#D2C5A2] font-bold text-lg">
              Order Id :<span className="font-semibold">order id</span>
            </p> */}
          </div>
          <div className="w-full border flex flex-col md:flex-row md:items-start   md:mt-4 mt-3 bg-[#D2C5A2] rounded-md p-4  ">
            <div className="md:text-base text-sm flex-1  font-semibold   md:border-r-2 md:border-black md:pr-10">
              {/* <p className="font-bold md:mb-4 w-full">
                Demo information,Checkout page information will be here{" "}
              </p> */}
              <div className="space-y-1 w-full">
                <div className="flex items-center justify-between">
                  <p>Full Name :</p>
                  <p className="text-start">{formData.fullName || "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Email :</p>
                  <p>{formData.email || "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Mobile :</p>
                  <p className="text-start">{formData.mobile || "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Address :</p>
                  <p>{formData.presentAddress || "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Order Notes :</p>
                  <p className="text-start">{formData.email || "N/A"}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Gender :</p>
                  <p>{formData.gender || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:my-8 md:my-6 my-8 px-p_4px">
            <p className=" md:my-2 font-semibold">Courses:</p>
            <table className="overflow-x-auto border w-full">
              <thead className="b w-full">
                <tr className="text-sm ">
                  <th className="lg:w-20 md:w-16 w-8 py-2 md:py-4 lg:py-6 border ">
                    Image
                  </th>
                  <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                    Course Name
                  </th>
                  <th className="lg:w-72 md:w-64 w-40 py-2 md:py-4 lg:py-6 border">
                    Student Name
                  </th>
                  <th className="lg:w-20 md:w-20 w-16 py-2 md:py-4 lg:py-6 border">
                    Quantity
                  </th>
                  <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                    Price
                  </th>
                  <th className="lg:w-20 md:w-20 w-16  py-2 md:py-4 lg:py-6 border text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="md:text-base text-sm font-semibold">
                <tr>
                  <td className="border text-center w-10 h-12 px-2">
                    <img
                      className=" w-full h-full object-cover mx-auto"
                      src={cartItems[0]?.photo}
                      alt=""
                    />
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {cartItems[0]?.course_name}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    <p>Student name</p>
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {cartItems[0]?.quantity}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    {cartItems[0]?.discount_price}
                  </td>
                  <td className="lg:py-6 md:py-4 py-2 text-center border">
                    ৳{calculateTotal()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
