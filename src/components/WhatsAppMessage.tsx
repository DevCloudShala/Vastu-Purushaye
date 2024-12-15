import { MessageSquare, Phone } from "lucide-react";
import React, { useState } from "react";

const WhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle chatbox
  const [message, setMessage] = useState(""); // Message state
  const whatsappNumber = "919520457941"; // Replace with your WhatsApp number

  const handleSend = () => {
    if (message.trim()) {
      // Open WhatsApp with the entered message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setMessage(""); // Clear input after sending
    } else {
      alert("Please type a message before sending.");
    }
  };

  const WhatsAppIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="WhatsApp"
        role="img"
        viewBox="0 0 512 512"
        fill="none"
        className="w-6 h-6" // Use Tailwind classes for consistent sizing
      >
        <rect
          width="512"
          height="512"
          rx="15%"
          fill="#25D366" // WhatsApp green background
        ></rect>
        <path
          fill="#FFFFFF" // WhatsApp white icon
          d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
        ></path>
      </svg>
    );
  };

  return (
    <div style={{ zIndex: "500" }}>
      {/* Floating WhatsApp Icon */}
      <div
        className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 cursor-pointer shadow-lg hover:bg-green-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare size={28}  color="#fff"/>
      </div>

      {/* Chatbox Popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white shadow-md border rounded-lg w-80">
          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-gray-800">WhatsApp Chat</h2>
            <p className="text-sm text-gray-500">
              Send us a message, we’re here to help!
            </p>
          </div>
          <div className="p-4">
            <textarea
              className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={handleSend}
              className="w-full bg-green-500 text-white py-2 rounded-lg mt-2 hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppPopup;
