import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ReactConfetti from 'react-confetti';
import ScrollToTop from '../components/ScrollToTop';

const ContactPage = () => {
  const [message, setMessage] = useState(""); // Message state
  const [name, setName] = useState(""); // Message state
  const [email, setEmail] = useState(""); // Message state
  const [mobile, setMobile] = useState(""); // Message state
  const whatsappNumber = "919520457941"; // Replace with your WhatsApp number
  const handleSend = () => {
    if (message.trim()) {
      setIsConfettiActive(true)

      // Open WhatsApp with the entered message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi My Name is'+ name+ `${'\n'}`+ 'My Email is: '+email+ `${'\n'}`+ 'My Mob. No. is: '+mobile+ `${'\n'}` +message)}`,
        "_blank"
      );
      setMessage(""); // Clear input after sending
    } else {
      alert("Please type a message before sending.");
    }
  };
    const [isConfettiActive, setIsConfettiActive] = React.useState(false);
  
  return (
    <div className="pt-16">
      <ScrollToTop/>

          <motion.div className="relative">
     
      {isConfettiActive && (
        <ReactConfetti
          numberOfPieces={300} // Adjust for confetti density
          recycle={false} // Confetti disappears after duration
          type="rect" // Confetti shape
          widthOrHeight={2} // Confetti size
          colors={[
            '#ff7f50', // Orange
            '#ffc107', // Yellow
            '#4ecdc4', // Teal
          ]}
        />
      )}
    </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about Vastu? We're here to help you create harmonious spaces.
            </p>

            <div className="space-y-6">
              {[
                { icon: <MapPin />, text: `88-89, 1st Floor, Workshop Road, Near Paper Mill Gate, Yamunanagar 135001` },
                { icon: <Phone />, text: "+91 9728720913" },
                { icon: <Phone />, text: "+91 9991704484" },
                
                
                { icon: <Mail />, text: "vastupurushaye@gmail.com" },
                // { icon: <Clock />, text: "Mon-Fri: 9:00 AM - 6:00 PM" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-amber-600">{item.icon}</div>
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile No.
                </label>
                <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <button
         onClick={handleSend}
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          <div className="mapswrapper">
      <iframe
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=88-89%2C%201st%20Floor%2C%20Workshop%20Road%2C%20Near%20Paper%20Mill%20Gate%2C%20Yamunanagar%20135001&zoom=10&maptype=roadmap"
        style={{ border: 0 }}
      ></iframe>
      <a
        href="https://www.taxuni.com/"
        style={{
          color: 'rgba(0,0,0,0)',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 0,
        }}
      >
        taxuni
      </a>
      <style jsx>{`
        .mapswrapper {
          background: #fff;
          position: relative;
        }
        .mapswrapper iframe {
          position: relative;
          z-index: 2;
        }
        .mapswrapper a {
          z-index: 0;
        }
      `}</style>
    </div>
        </div>
 
      </motion.div>




    </div>
  );
};

export default ContactPage;