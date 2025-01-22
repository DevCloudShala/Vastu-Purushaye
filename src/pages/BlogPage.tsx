
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const BlogPage = () => {


    const BlogCarousel = ({ posts }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        
        // Function to cycle to the next post
        const nextPost = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
        };
        
        // Function to cycle to the previous post
        const prevPost = () => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
        );
        };
        
        return (
        <div className="relative w-full overflow-hidden">
        <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.5 }}
        >
        {posts.map((post, index) => (
        <div key={index} className="w-full min-w-full">
        <div
        className="bg-cover bg-center h-72 flex items-end justify-start"
        style={{ backgroundImage: `url(${post.image})` }}
        >
        <div className="bg-white bg-opacity-90 p-4 m-4 backdrop-blur">
        <h3 className="text-2xl font-bold">{post.title}</h3>
        <p className="mt-2">{post.description}</p>
        <div className="flex items-center justify-between mt-4 text-gray-500">
        <span>{post.category}</span>
        <span>{post.readTime} min read</span>
        </div>
        </div>
        </div>
        </div>
        ))}
        </motion.div>
        
        <button
        onClick={prevPost}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 shadow-lg"
        >
        &#8678;
        </button>
        
        <button
        onClick={nextPost}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 shadow-lg"
        >
        &#8680;
        </button>
        </div>
        );
        };
        
const posts = [
{
title: "Where To Watch 'John Wick: Chapter 4'",
description: "There's been no official announcement regarding John Wick: Chapter 4's streaming release...",
image: "/path/to/poster.jpg",
category: "Movies",
readTime: 4,
},
{
title: "Where To Watch 'John Wick: Chapter 4'",
description: "There's been no official announcement regarding John Wick: Chapter 4's streaming release...",
image: "/path/to/poster.jpg",
category: "Movies",
readTime: 4,
},
{
title: "Where To Watch 'John Wick: Chapter 4'",
description: "There's been no official announcement regarding John Wick: Chapter 4's streaming release...",
image: "/path/to/poster.jpg",
category: "Movies",
readTime: 4,
},
// Add more post objects as needed
];

return (
<div className="bg-white min-h-screen p-8 text-gray-800">
<header className="text-center mb-8">
<h1 className="text-4xl font-bold">Welcome to Bulletin</h1>
<p className="mt-2 text-lg text-gray-500">
Craft narratives that ignite inspiration, knowledge, and entertainment
</p>
</header>

<main>
<section className="mb-12">
<BlogCarousel posts={posts} />
</section>

<h2 className="text-2xl font-bold mb-4">Latest News</h2>
{/* Your Latest News Section */}
</main>
</div>
);
};

export default BlogPage;