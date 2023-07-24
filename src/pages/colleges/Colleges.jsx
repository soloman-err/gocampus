import { useState } from 'react';
import CollegeCard from '../../components/container/CollegeCard';
import CollegeDetails from '../collegeDetails/CollegeDetails';

const collegesData = [
  {
    id: 1,
    name: 'Harvard University',
    rating: 4.7,
    admissionDate: '2023-09-01',
    researchCount: 100,
    image: 'https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg',
    events: ['Orientation Day', 'Seminar on Career Opportunities'],
    researchHistory: ['Medical Research', 'Economics Studies'],
    sports: ['Football', 'Basketball', 'Swimming'],
  },
  {
    id: 2,
    name: 'Stanford University',
    rating: 4.6,
    admissionDate: '2023-08-15',
    researchCount: 75,
    image: 'https://cdn.britannica.com/25/121725-050-8BF363EC/Hoover-Tower-Stanford-University-California.jpg',
    events: ['Annual Cultural Fest', 'Workshop on Entrepreneurship'],
    researchHistory: ['Computer Science Research', 'Social Sciences Studies'],
    sports: ['Cricket', 'Badminton', 'Table Tennis'],
  },
  {
    id: 3,
    name: 'University of Oxford',
    rating: 4.8,
    admissionDate: '2023-09-20',
    researchCount: 130,
    image: 'https://static.javatpoint.com/university/images/oxford-university.png',
    events: ['Science Exhibition', 'Literary Symposium'],
    researchHistory: ['Biomedical Research', 'Environmental Studies'],
    sports: ['Volleyball', 'Chess', 'Athletics'],
  },
  {
    id: 4,
    name: 'Massachusetts Institute of Technology (MIT)',
    rating: 4.9,
    admissionDate: '2023-08-10',
    researchCount: 90,
    image: 'https://reachivy.com/uploads/top_university_mba/MIT-1.jpg',
    events: ['Tech Fest', 'Art Competition'],
    researchHistory: ['Engineering Research', 'Physics Studies'],
    sports: ['Tennis', 'Baseball', 'Gymnastics'],
  },
  {
    id: 5,
    name: 'University of Cambridge',
    rating: 4.7,
    admissionDate: '2023-09-25',
    researchCount: 110,
    image: 'https://www.royce.ac.uk/content/uploads/2017/05/Cambridge3.jpg',
    events: ['Music Festival', 'Debate Competition'],
    researchHistory: ['Astrophysics Research', 'Psychology Studies'],
    sports: ['Hockey', 'Fencing', 'Karate'],
  },
  {
    id: 6,
    name: 'ETH Zurich (Swiss Federal Institute of Technology)',
    rating: 4.5,
    admissionDate: '2023-08-05',
    researchCount: 80,
    image: 'https://ethz.ch/en/news-and-events/eth-news/news/2021/03/top-rankings-in-15-disciplines/_jcr_content/pageimages/imageCarousel.imageformat.lightbox.1483024166.jpg',
    events: ['Fashion Show', 'Robotics Expo'],
    researchHistory: ['Mechanical Engineering Research', 'Anthropology Studies'],
    sports: ['Soccer', 'Rugby', 'Taekwondo'],
  },
  {
    id: 7,
    name: 'National University of Singapore (NUS)',
    rating: 4.4,
    admissionDate: '2023-09-30',
    researchCount: 120,
    image: 'https://www.scholarly.co/wp-content/uploads/2023/02/NUS.png',
    events: ['Dance Competition', 'Science Conference'],
    researchHistory: ['Chemistry Research', 'Archaeology Studies'],
    sports: ['Basketball', 'Cricket', 'Yoga'],
  },
  {
    id: 8,
    name: 'California Institute of Technology (Caltech)',
    rating: 4.9,
    admissionDate: '2023-08-01',
    researchCount: 100,
    image: 'https://www.thoughtco.com/thmb/RUT0AYerHZqTpnANF05esAYjrRA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-458411541-7cc7187ad6e94a52a77b63ec40088605.jpg',
    events: ['Photography Contest', 'Business Summit'],
    researchHistory: ['Biology Research', 'Economics Studies'],
    sports: ['Swimming', 'Table Tennis', 'Cycling'],
  },
  {
    id: 9,
    name: 'University of Tokyo',
    rating: 4.3,
    admissionDate: '2023-09-05',
    researchCount: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Yasuda_Auditorium.jpg/250px-Yasuda_Auditorium.jpg',
    events: ['Film Festival', 'Entrepreneurship Meetup'],
    researchHistory: ['Physics Research', 'Political Science Studies'],
    sports: ['Badminton', 'Volleyball', 'Wrestling'],
  },
  {
    id: 10,
    name: 'University of Toronto',
    rating: 4.5,
    admissionDate: '2023-08-15',
    researchCount: 80,
    image: 'https://www.narcity.com/media-library/university-of-toronto-voted-the-best-in-canada-for-dozens-of-subjects.jpg?id=26009799&width=1200&height=600&coordinates=0%2C299%2C0%2C299',
    events: ['Literature Festival', 'Coding Challenge'],
    researchHistory: ['Mathematics zResearch', 'History Studies'],
    sports: ['Cricket', 'Football', 'Archery'],
  },
  // Add more international universities and colleges...
];

const Colleges = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showAllColleges, setShowAllColleges] = useState(false);
  
  const handleDetailsClick = (college) => {
    setSelectedCollege(college);
  };

  const visibleColleges = showAllColleges ? collegesData : collegesData.slice(0, 6);

  return (
    <div className="md:w-[80%] mx-auto p-4 mt-10">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4 text-center">All Colleges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10 mt-10">
        {visibleColleges?.map((college) => (
          <div key={college.id}>
            <CollegeCard
              college={college}
              onClick={() => handleDetailsClick(college)}
            />
          </div>
        ))}
      </div>
      
      {/* See more/less button */}
      {collegesData.length > 6 && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => setShowAllColleges(!showAllColleges)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 rounded focus:outline-none focus:shadow-outline btn btn-sm"
          >
            {showAllColleges ? 'Show Less' : 'See More'}
          </button>
        </div>
      )}

      {selectedCollege && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">College Details</h2>
          <CollegeDetails college={selectedCollege} />
        </div>
      )}
    </div>
  );
};

export default Colleges;
