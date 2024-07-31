"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Image from "next/image";
import StarRating from "../components/StarRating";

// Define the types
interface Review {
  author_name: string;
  profile_photo_url: string;
  text: string;
  rating: number;
}

interface PlaceDetailsResponse {
  result: {
    reviews: Review[];
  };
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<PlaceDetailsResponse>("/api/reviews", {
          params: {
            language: "el", // Set the language to Greek
          },
        });
        console.log("Fetched reviews:", response.data.result.reviews); // Log the reviews to check the language
        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className='py-12 px-4 bg-gray-100'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center text-red-900 mb-4'>
          Αξιολογήσεις
        </h2>
        <p className='text-gray-700 text-center mb-12'>
          Δείτε τι έγραψαν για εμάς :
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              ref={index === 0 ? ref1 : index === 1 ? ref2 : ref3}
              initial={{ opacity: 0, x: -100 }}
              animate={
                (index === 0 && inView1) ||
                (index === 1 && inView2) ||
                (index === 2 && inView3)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, delay: index * 0.2 }}
              className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300'
            >
              <p className='text-gray-800 mb-4'>{review.text}</p>
              <StarRating rating={review.rating} />
              <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                  <Image
                    src={review.profile_photo_url || "/user.png"}
                    alt='Avatar'
                    width={40}
                    height={40}
                    objectFit='cover'
                  />
                </div>
                <div className='ml-4'>
                  <p className='font-bold text-red-900'>{review.author_name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
