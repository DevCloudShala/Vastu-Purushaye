import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <div className="max-w-md">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Subscribe to our newsletter
      </h3>
      <p className="text-base text-gray-300 mb-4">
        Get weekly Vastu tips and exclusive insights delivered to your inbox.
      </p>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 min-w-0 px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          required
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;