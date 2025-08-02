import React, { useState } from "react";
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
  ArrowRight,
  FileText,
  AlertCircle,
} from "lucide-react";

const Refundpayment = () => {
  const [refundMethod, setRefundMethod] = useState("original");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);

  const handleRefundRequest = () => {
    setIsSubmitting(true);
    // Simulate refund processing
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Refund request submitted successfully!");
    }, 2000);
  };

  const handleMethodChange = (method) => {
    setRefundMethod(method);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Status Header */}
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FileText className="h-5 w-5 text-red-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Refund Request
                  </h3>
                  <div className="mt-2 text-sm text-red-700">
                    <p>
                      Please review your refund details and submit your request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Refund Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Refund Details
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
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Purchase Date:</span>
                  <span className="font-medium">May 15, 2024</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4 mt-4">
                  <span className="text-gray-800 font-semibold">
                    Amount Paid:
                  </span>
                  <span className="text-xl font-bold text-gray-800">
                    $299.00
                  </span>
                </div>
              </div>

              {/* Refund Amount */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Refund Amount
                </h3>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-green-800 font-medium">
                        Eligible Refund Amount
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Based on LearnHub refund policy
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      $269.10
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-green-700">
                    <p>($29.90 non-refundable fee applied)</p>
                  </div>
                </div>
              </div>

              {/* Refund Method */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Refund Method
                </h3>
                <div className="space-y-3">
                  <div
                    className={`border rounded-lg p-4 flex items-center cursor-pointer ${
                      refundMethod === "original"
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => handleMethodChange("original")}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        refundMethod === "original"
                          ? "border-indigo-500 bg-indigo-500"
                          : "border-gray-300"
                      }`}
                    >
                      {refundMethod === "original" && (
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">
                        Original Payment Method
                      </p>
                      <p className="text-sm text-gray-600">
                        Credit Card •••• 4582
                      </p>
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-4 flex items-center cursor-pointer ${
                      refundMethod === "bank"
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => handleMethodChange("bank")}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        refundMethod === "bank"
                          ? "border-indigo-500 bg-indigo-500"
                          : "border-gray-300"
                      }`}
                    >
                      {refundMethod === "bank" && (
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">Bank Transfer</p>
                      <p className="text-sm text-gray-600">
                        Provide bank details for refund
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Policy */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-800">
                    Refund Policy
                  </h3>
                  <button
                    onClick={() => setShowRefundPolicy(!showRefundPolicy)}
                    className="text-indigo-600 text-sm font-medium flex items-center"
                  >
                    {showRefundPolicy ? "Hide Details" : "View Details"}
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>

                {showRefundPolicy && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
                    <h4 className="font-medium mb-2">LearnHub Refund Policy</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Full refund available within 7 days of purchase</li>
                      <li>Partial refund (90%) available within 14 days</li>
                      <li>After 14 days, only 50% refund available</li>
                      <li>Administrative fee of 10% applies to all refunds</li>
                      <li>Refunds processed within 5-7 business days</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleRefundRequest}
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Submit Refund Request"}
                </button>
                <button className="w-full sm:w-auto px-6 py-3 rounded-md font-medium text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Important Info */}
          <div className="mt-8 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Important Information
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    Once your refund is processed, you will receive a
                    confirmation email with details. Please note that refunds
                    may take 5-7 business days to appear in your account
                    depending on your payment provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Refundpayment;
