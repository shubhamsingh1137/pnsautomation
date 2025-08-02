import React, { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
// Main App component
const Allpayment = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'error', null

  // Dummy course data
  const course = {
    name: "Advanced React Development",
    price: 499.99,
    description:
      "Master React with advanced concepts, hooks, and state management.",
  };

  // Handle form submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentStatus(null); // Reset status

    // Basic validation (for demonstration purposes)
    if (paymentMethod === "creditCard") {
      if (!cardNumber || !expiryDate || !cvv) {
        setPaymentStatus("error");
        return;
      }
      if (cardNumber.length < 16) {
        setPaymentStatus("error");
        return;
      }
    }

    // Simulate payment processing
    setTimeout(() => {
      // In a real application, you would send this data to a backend
      console.log("Processing payment...");
      console.log("Payment Method:", paymentMethod);
      if (paymentMethod === "creditCard") {
        console.log("Card Number:", cardNumber);
        console.log("Expiry Date:", expiryDate);
        console.log("CVV:", cvv);
      }
      // Simulate success or failure
      const success = Math.random() > 0.2; // 80% chance of success
      if (success) {
        setPaymentStatus("success");
      } else {
        setPaymentStatus("error");
      }
    }, 1500);
  };

  // Handle card number formatting
  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const cleanedValue = value.replace(/\D/g, "");
    // Insert spaces every 4 digits
    const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedValue.trim();
  };

  // Handle expiry date formatting (MM/YY)
  const formatExpiryDate = (value) => {
    // Remove all non-digit characters
    const cleanedValue = value.replace(/\D/g, "");
    // Insert '/' after 2 digits if more than 2 digits exist
    if (cleanedValue.length > 2) {
      return `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 4)}`;
    }
    return cleanedValue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 w-full max-w-2xl transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Complete Your Payment
        </h1>

        {/* Course Details Section */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8 shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">
            Course Details
          </h2>
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg text-gray-700 font-medium">{course.name}</p>
            <p className="text-xl font-bold text-blue-700">
              ${course.price.toFixed(2)}
            </p>
          </div>
          <p className="text-sm text-gray-600">{course.description}</p>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Choose Payment Method
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all duration-200
                ${
                  paymentMethod === "creditCard"
                    ? "border-blue-600 bg-blue-50 text-blue-800 shadow-md"
                    : "border-gray-300 bg-gray-50 text-gray-600 hover:border-blue-400 hover:bg-blue-100"
                }`}
              onClick={() => setPaymentMethod("creditCard")}
            >
              <FaRegCreditCard size={24} />
              <span className="font-medium text-lg">Credit Card</span>
            </button>
            <button
              className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition-all duration-200
                ${
                  paymentMethod === "paypal"
                    ? "border-blue-600 bg-blue-50 text-blue-800 shadow-md"
                    : "border-gray-300 bg-gray-50 text-gray-600 hover:border-blue-400 hover:bg-blue-100"
                }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <FaPaypal size={24} />
              <span className="font-medium text-lg">PayPal</span>
            </button>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handlePaymentSubmit} className="space-y-6">
          {paymentMethod === "creditCard" && (
            <>
              <div>
                <label
                  htmlFor="cardNumber"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={formatCardNumber(cardNumber)}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength="19" // 16 digits + 3 spaces
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-gray-700 text-lg font-medium mb-2"
                  >
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="MM/YY"
                    value={formatExpiryDate(expiryDate)}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    maxLength="5" // MM/YY
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-gray-700 text-lg font-medium mb-2"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                    placeholder="XXX"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))} // Only allow digits
                    maxLength="4"
                    required
                  />
                </div>
              </div>
            </>
          )}

          {paymentMethod === "paypal" && (
            <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-xl text-yellow-800 font-semibold mb-4">
                You will be redirected to PayPal to complete your purchase.
              </p>
              <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                onClick={() => alert("Simulating redirection to PayPal...")} // Use a custom modal in a real app
              >
                Proceed to PayPal
              </button>
            </div>
          )}

          {/* Payment Status Message */}
          {paymentStatus === "success" && (
            <div className="flex items-center justify-center p-4 bg-green-100 text-green-800 rounded-lg text-lg font-medium animate-fadeIn">
              <FaRegCheckCircle className="mr-3" size={24} />
              Payment Successful! Thank you for your purchase.
            </div>
          )}

          {paymentStatus === "error" && (
            <div className="flex items-center justify-center p-4 bg-red-100 text-red-800 rounded-lg text-lg font-medium animate-fadeIn">
              <FiXCircle className="mr-3" size={24} />
              Payment Failed. Please check your details and try again.
            </div>
          )}

          {/* Pay Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-4 rounded-xl text-2xl font-bold shadow-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-blue-300"
            disabled={paymentStatus === "success"} // Disable button after successful payment
          >
            Pay Now - ${course.price.toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Allpayment;
