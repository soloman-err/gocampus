// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Reviews = () => {
  const collegeReviews = [
    {
      id: 1,
      collegeName: 'ABC University',
      review:
        'I had a great experience at ABC University. The faculty was knowledgeable, and the campus had excellent facilities.',
      rating: 4.5,
    },
    {
      id: 2,
      collegeName: 'XYZ College',
      review:
        'XYZ College provided a supportive learning environment. However, the course offerings could be more diverse.',
      rating: 3.8,
    },
    {
      id: 3,
      collegeName: 'DEF Institute',
      review:
        'DEF Institute has fantastic research opportunities, but the class sizes were quite large.',
      rating: 4.0,
    },
    // Add more college reviews as needed
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">College Reviews</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {collegeReviews.map((review) => (
            <SwiperSlide
              className="bg-gray-100 p-4 shadow-md rounded-lg"
              key={review.id}
            >
              <h3 className="text-xl font-semibold mb-2">
                {review.collegeName}
              </h3>
              <p className="mb-4">{review.review}</p>
              <div className="flex items-center">
                <span className="mr-2">Rating:</span>
                <span className="text-yellow-500">{review.rating}</span>
                <span className="ml-1 text-sm">/ 5.0</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
