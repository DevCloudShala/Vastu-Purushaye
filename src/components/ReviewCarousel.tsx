
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ReviewSection = () => {
const reviews = [
{
name: "John Doe",
review: "Avinash transformed our office space, bringing harmony and increased productivity. His insights are truly invaluable!",
profession: "CEO, Doe Industries"
},
{
name: "Jane Smith",
review: "The Vastu adjustments Avinash made in our home have brought us peace and prosperity. It feels like a new beginning!",
profession: "Homeowner"
},
{
name: "Mike Johnson",
review: "As a business owner, I can attest to Avinash's expertise. Our store layout now attracts more customers, thanks to his guidance.",
profession: "Retail Owner"
},
{
name: "Emily Davis",
review: "Avinash's Vastu consultation was a game-changer for our family. We now experience better health and happiness.",
profession: "Mother and Teacher"
},
{
name: "Samuel Lee",
review: "His approach is both professional and empathetic. The changes recommended by Avinash have been life-changing.",
profession: "Entrepreneur"
},
{
name: "Rachel Green",
review: "Our workspace feels more vibrant and positive, all thanks to Avinash's Vastu expertise. Highly recommended!",
profession: "Manager, Green Corp"
}
];

return (
<section className="py-20 bg-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-extrabold text-gray-900 mb-2">What Our Clients Say</h2>
<p className="text-lg text-gray-600">Real experiences from those who have transformed their spaces.</p>
</div>
<Carousel
showThumbs={false}
showStatus={false}
infiniteLoop
useKeyboardArrows
autoPlay
interval={5000}
centerMode
centerSlidePercentage={100}
renderArrowPrev={(clickHandler, hasPrev) =>
hasPrev && (
<></>
)
}
renderArrowNext={(clickHandler, hasNext) =>
hasNext && (
<></>
)
}
>
{reviews.map((review, index) => (
<div key={index} className="flex gap-4 justify-center space-x-8">
{reviews.slice(index, index + 3).map((reviewSubset, subIndex) => (
<div key={subIndex} className="w-72 bg-white rounded-lg shadow-lg p-4">
<p className="text-lg font-medium text-gray-800 mb-2">{reviewSubset.review}</p>
<p className="text-sm text-gray-500">- {reviewSubset.name}, {reviewSubset.profession}</p>
</div>
))}
</div>
))}
</Carousel>
</div>
</section>
);
};

export default ReviewSection;