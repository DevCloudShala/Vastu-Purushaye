import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    title: "Architectural Design",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    title: "Interior Design",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    title: "Interior Design",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    title: "Interior Design",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    title: "Interior Design",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    title: "Lighting Design",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they."
  }
];

const BlogCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= blogPosts.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? blogPosts.length - 3 : prevIndex - 1
    );
  };

  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visiblePosts.map((post) => (
          <div key={post.id} className="group">
            <div className="overflow-hidden mb-6">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-600 transition">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.description}
            </p>
            <a 
              href="#" 
              className="inline-block text-amber-600 hover:text-amber-700 transition font-medium"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-amber-600 transition group"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-amber-600 transition group"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white" />
      </button>
    </div>
  );
};

export default BlogCarousel;