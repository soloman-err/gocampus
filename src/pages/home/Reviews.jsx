// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { useEffect, useState } from 'react';
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
    {
      id: 4,
      collegeName: 'EFG Academy',
      review:
        'EFG Academy offers a wide range of extracurricular activities, making campus life enjoyable.',
      rating: 4.2,
    },
    {
      id: 5,
      collegeName: 'LMN College',
      review:
        'LMN College has a friendly atmosphere, and the professors are always ready to help.',
      rating: 4.7,
    },
    {
      id: 6,
      collegeName: 'PQR University',
      review:
        'PQR University provides state-of-the-art facilities, and the campus is well-maintained.',
      rating: 4.9,
    },
    {
      id: 7,
      collegeName: 'UVW College',
      review:
        'UVW College offers a diverse range of courses, and the career services are exceptional.',
      rating: 4.4,
    },
    {
      id: 8,
      collegeName: 'JKL Institute',
      review:
        'JKL Institute has a rigorous academic program, but the campus lacks proper parking facilities.',
      rating: 3.5,
    },
    {
      id: 9,
      collegeName: 'RST University',
      review:
        'RST Universitys professors are highly experienced, and the research opportunities are unmatched.',
      rating: 4.8,
    },
    {
      id: 10,
      collegeName: 'MNO College',
      review:
        'MNO College has a vibrant student community, and the sports facilities are top-notch.',
      rating: 4.3,
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280){
        setSlidesPerView(3)
      } else if (screenWidth >= 768) {
        setSlidesPerView(3);
      } else{
        setSlidesPerView(1);
      }
    };

    // Call the function on initial render
    updateSlidesPerView();

    // Attach event listener to update slidesPerView when window size changes
    window.addEventListener('resize', updateSlidesPerView);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);


  return (
    <section className="w-[80%] lg:w-[60%] mx-auto bg-white pb-10 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl
         font-bold text-center mb-4">College Reviews</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
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
