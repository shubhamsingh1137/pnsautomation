import React, { useState, useEffect } from "react";
import {
  Clock,
  CreditCard,
  Home,
  BookOpen,
  Info,
  Mail,
  Phone,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

const PendingPaymentPage = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleRetryPayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert("Payment processing initiated!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Status Header */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Clock className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Payment Pending
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Your payment is being processed. Please complete within:
                    </p>
                    <p className="font-bold text-lg mt-1">
                      {formatTime(timeLeft)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Payment Details
              </h2>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Course:</span>
                  <span className="font-medium">Advanced Web Development</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Student:</span>
                  <span className="font-medium">John Doe</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Enrollment ID:</span>
                  <span className="font-medium">ENR-2024-7890</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                  <span className="text-gray-800 font-semibold">
                    Amount Due:
                  </span>
                  <span className="text-xl font-bold text-indigo-600">
                    $299.00
                  </span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Payment Method
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-600">
                    <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                    <span>Credit Card</span>
                  </div>
                  <div className="text-gray-500">•••• •••• •••• 4582</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleRetryPayment}
                  disabled={isProcessing}
                  className={`w-full sm:w-auto px-6 py-3 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isProcessing ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isProcessing ? "Processing..." : "Retry Payment"}
                </button>
                <button className="w-full sm:w-auto px-6 py-3 rounded-md font-medium text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">
              Need help?
            </h3>
            <p className="text-sm text-blue-700">
              If you encounter any issues with your payment, please contact our
              support team immediately. Payments must be completed within 15
              minutes to secure your enrollment.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PendingPaymentPage;
