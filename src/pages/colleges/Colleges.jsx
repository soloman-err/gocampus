import { useState } from 'react';
import CollegeCard from '../../components/container/CollegeCard';
import CollegeDetails from '../collegeDetails/CollegeDetails';

const collegesData = [
  {
    id: 1,
    name: 'Example College 1',
    rating: 4.5,
    admissionDate: '2023-09-01',
    researchCount: 100,
    image: 'college1.jpg',
  },
  {
    id: 2,
    name: 'Example College 2',
    rating: 4.2,
    admissionDate: '2023-08-15',
    researchCount: 75,
    image: 'college2.jpg',
  },
  {
    id: 3,
    name: 'Example College 3',
    rating: 4.1,
    admissionDate: '2023-09-10',
    researchCount: 85,
    image: 'college3.jpg',
  },
  {
    id: 4,
    name: 'Example College 4',
    rating: 4.7,
    admissionDate: '2023-08-25',
    researchCount: 120,
    image: 'college4.jpg',
  },
  {
    id: 5,
    name: 'Example College 5',
    rating: 4.4,
    admissionDate: '2023-09-05',
    researchCount: 90,
    image: 'college5.jpg',
  },
  {
    id: 6,
    name: 'Example College 6',
    rating: 4.3,
    admissionDate: '2023-08-20',
    researchCount: 80,
    image: 'college6.jpg',
  },
  {
    id: 7,
    name: 'Example College 7',
    rating: 4.6,
    admissionDate: '2023-09-15',
    researchCount: 110,
    image: 'college7.jpg',
  },
  {
    id: 8,
    name: 'Example College 8',
    rating: 4.0,
    admissionDate: '2023-08-30',
    researchCount: 70,
    image: 'college8.jpg',
  },
  // Add more colleges here...
];

const Colleges = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [showAllColleges, setShowAllColleges] = useState(false);
  
  const handleDetailsClick = (college) => {
    setSelectedCollege(college);
  };

  const visibleColleges = showAllColleges ? collegesData : collegesData.slice(0, 6);

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold mb-4">Colleges</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
