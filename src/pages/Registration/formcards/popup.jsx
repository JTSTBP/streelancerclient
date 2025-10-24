import React from "react";

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-pink-100 text-center p-6 rounded-lg shadow-lg max-w-md w-full border border-pink-300">
        <p className="text-pink-800 text-base font-medium">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
