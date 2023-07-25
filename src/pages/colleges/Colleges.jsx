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
    // Properties for Harvard University...
    campusLocation: 'Cambridge, Massachusetts, USA',
    yearEstablishment: '1636',
    vision: 'To provide education and prepare leaders for society.',
    mission: 'To advance knowledge, address complex challenges, and improve the world.',
    applicationRequirements: [
      'Completed application form',
      'Transcripts from previous educational institutions',
      'Letters of recommendation',
      'Standardized test scores (SAT/ACT)',
      'Personal statement or essay',
    ],
    applicationDates: 'Deadlines vary based on the program and degree level.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Extracurricular activities and achievements',
      'Letters of recommendation',
      'Personal statement or essay',
      'Standardized test scores (SAT/ACT)',
    ],
    entranceExams: 'SAT or ACT for undergraduate admissions.',
    counselingProcess: 'Applicants may be interviewed by admissions counselors.',
    campusInfrastructure: 'Modern campus with state-of-the-art facilities and libraries.',
    hostelFacilities: 'On-campus housing available for students.',
    foodAndDining: 'Various dining options, including cafeterias and restaurants.',
    studentSupportServices: 'Counseling, health center, career services, and more.',
    notableAlumni: ['Barack Obama', 'Natalie Portman', 'Mark Zuckerberg'],
    alumniEvents: ['Harvard Alumni Reunion', 'Career Networking Events', 'Leadership Conferences'],
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
    // Properties for Stanford University...
    campusLocation: 'Stanford, California, USA',
    yearEstablishment: '1885',
    vision: 'To be a world leader in research and education.',
    mission: 'To educate future leaders and promote interdisciplinary research.',
    applicationRequirements: [
      'Completed application form',
      'Transcripts from previous educational institutions',
      'Letters of recommendation',
      'Standardized test scores (SAT/ACT)',
      'Personal statement or essay',
    ],
    applicationDates: 'Deadlines vary based on program and degree level.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Extracurricular activities and achievements',
      'Letters of recommendation',
      'Personal statement or essay',
      'Standardized test scores (SAT/ACT)',
    ],
    entranceExams: 'SAT or ACT for undergraduate admissions.',
    counselingProcess: 'Applicants may be interviewed by admissions counselors.',
    campusInfrastructure: 'Modern campus with state-of-the-art facilities and libraries.',
    hostelFacilities: 'On-campus housing available for students.',
    foodAndDining: 'Various dining options, including cafeterias and restaurants.',
    studentSupportServices: 'Counseling, health center, career services, and more.',
    notableAlumni: ['Elon Musk', 'Sergey Brin', 'Jennifer Connelly'],
    alumniEvents: ['Homecoming Reunion', 'Alumni Career Fair', 'Networking Events'],
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
    // Properties for University of Oxford...
    campusLocation: 'Oxford, England',
    yearEstablishment: '1096',
    vision: 'To be a leading global university, improving lives through education and research.',
    mission: 'To achieve international distinction in research and scholarship, and to support excellence in teaching.',
    applicationRequirements: [
      'Completed application form',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Statement of purpose',
      'English language proficiency test scores (if applicable)',
    ],
    applicationDates: 'Deadlines vary based on the course and program of study.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Relevant work experience (for certain programs)',
      'Letters of recommendation',
      'Statement of purpose',
      'Interview (for some courses)',
    ],
    entranceExams: 'Most courses do not require entrance exams, but some may have additional assessments.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews.',
    campusInfrastructure: 'Historic and modern buildings with world-class research facilities.',
    hostelFacilities: 'Various accommodation options available, including on-campus and off-campus housing.',
    foodAndDining: 'Diverse dining options offering cuisines from around the world.',
    studentSupportServices: 'Comprehensive support services, including academic and personal support.',
    notableAlumni: ['Stephen Hawking', 'Indira Gandhi', 'Malala Yousafzai'],
    alumniEvents: ['Oxford Alumni Reunion', 'Career Networking Events', 'Academic Workshops'],
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
    // Properties for MIT...
    campusLocation: 'Cambridge, Massachusetts, USA',
    yearEstablishment: '1861',
    vision: 'To advance knowledge and educate students in science, technology, and other areas.',
    mission: 'To bring knowledge to bear on the world’s great challenges.',
    applicationRequirements: [
      'Completed application form',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Standardized test scores (SAT/ACT or GRE/GMAT)',
      'Statement of objectives or essays',
    ],
    applicationDates: 'Deadlines vary based on the program and degree level.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Statement of objectives or essays',
      'Relevant experience (for some programs)',
      'Test scores (if applicable)',
    ],
    entranceExams: 'SAT/ACT for undergraduate admissions, GRE/GMAT for graduate admissions.',
    counselingProcess: 'Applicants may be invited for interviews (for certain programs).',
    campusInfrastructure: 'Cutting-edge research facilities and modern campus environment.',
    hostelFacilities: 'On-campus housing options available.',
    foodAndDining: 'Diverse dining options catering to various cuisines.',
    studentSupportServices: 'Academic advising, health services, and career development support.',
    notableAlumni: ['Kofi Annan', 'Buzz Aldrin', 'Salman Rushdie'],
    alumniEvents: ['MIT Alumni Reunion', 'Entrepreneurship Summit', 'Innovation Conferences'],
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
    // Properties for University of Cambridge...
    campusLocation: 'Cambridge, England',
    yearEstablishment: '1209',
    vision: 'To contribute to society through the pursuit of education, learning, and research.',
    mission: 'To provide education and carry out research at the highest international levels of excellence.',
    applicationRequirements: [
      'Completed application form',
      'Transcripts and certificates from previous institutions',
      'Letters of recommendation',
      'Personal statement',
      'English language proficiency test scores (if applicable)',
    ],
    applicationDates: 'Deadlines vary based on the course and program of study.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Personal statement',
      'Interview (for some courses)',
      'Relevant experience (for certain programs)',
    ],
    entranceExams: 'Most courses do not require entrance exams, but some may have additional assessments or interviews.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews.',
    campusInfrastructure: 'Historic buildings and modern research facilities.',
    hostelFacilities: 'Various accommodation options available for students.',
    foodAndDining: 'Numerous dining facilities offering a wide range of cuisines.',
    studentSupportServices: 'Comprehensive support services for academic and personal needs.',
    notableAlumni: ['Stephen Hawking', 'Charles Darwin', 'Emma Thompson'],
    alumniEvents: ['Cambridge Alumni Reunion', 'Career Networking Events', 'Academic Symposia'],
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
    // Properties for ETH Zurich...
    campusLocation: 'Zurich, Switzerland',
    yearEstablishment: '1855',
    vision: 'To be a leading university in technology and natural sciences.',
    mission: 'To foster creativity and critical thinking and to contribute to sustainable development.',
    applicationRequirements: [
      'Completed online application',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'English language proficiency test scores (if applicable)',
    ],
    applicationDates: 'Deadlines vary based on the program and degree level.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'Interview (for some programs)',
      'Relevant experience (for certain programs)',
    ],
    entranceExams: 'Most programs do not require entrance exams, but some may have additional assessments or interviews.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews.',
    campusInfrastructure: 'Modern campus with specialized research facilities.',
    hostelFacilities: 'Limited on-campus housing; students often live in private accommodation.',
    foodAndDining: 'Various dining options on and around the campus.',
    studentSupportServices: 'Academic and career counseling, health services, and student associations.',
    notableAlumni: ['Albert Einstein', 'Johann Schneider-Ammann', 'Claude Nicollier'],
    alumniEvents: ['ETH Zurich Alumni Reunion', 'Career Fairs', 'Research Symposia'],
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
    // Properties for National University of Singapore...
    campusLocation: 'Singapore',
    yearEstablishment: '1905',
    vision: 'A leading global university, advancing knowledge for a better world.',
    mission: 'To transform lives and serve society through excellence in education and research.',
    applicationRequirements: [
      'Completed online application',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'English language proficiency test scores (if applicable)',
    ],
    applicationDates: 'Deadlines vary based on the course and program of study.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'Interview (for some programs)',
      'Relevant experience (for certain programs)',
    ],
    entranceExams: 'Most courses do not require entrance exams, but some may have additional assessments or interviews.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews.',
    campusInfrastructure: 'Modern campus with world-class facilities.',
    hostelFacilities: 'On-campus and off-campus housing options available.',
    foodAndDining: 'Diverse dining options reflecting Singaporean cuisine and international dishes.',
    studentSupportServices: 'Comprehensive support services for academic and personal development.',
    notableAlumni: ['Tony Tan Keng Yam', 'Kwa Geok Choo', 'Chua Sock Koong'],
    alumniEvents: ['NUS Alumni Homecoming', 'Career Fairs', 'Networking Events'],
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
    // Properties for Caltech...
    campusLocation: 'Pasadena, California, USA',
    yearEstablishment: '1891',
    vision: 'To expand human knowledge and benefit society through research integrated with education.',
    mission: 'To serve as a world-class research and educational institution.',
    applicationRequirements: [
      'Completed online application',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Statement of purpose or essays',
      'Standardized test scores (SAT/ACT or GRE/GMAT)',
    ],
    applicationDates: 'Deadlines vary based on the program and degree level.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Statement of purpose or essays',
      'Standardized test scores (SAT/ACT or GRE/GMAT)',
      'Relevant experience (for some programs)',
    ],
    entranceExams: 'SAT/ACT for undergraduate admissions, GRE/GMAT for graduate admissions.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews (for certain programs).',
    campusInfrastructure: 'Cutting-edge research facilities and modern campus environment.',
    hostelFacilities: 'On-campus housing options available.',
    foodAndDining: 'Diverse dining options catering to various cuisines.',
    studentSupportServices: 'Academic advising, health services, and career development support.',
    notableAlumni: ['Feynman', 'Kip Thorne', 'Barack Obama'],
    alumniEvents: ['Caltech Alumni Reunion', 'Science and Technology Conferences', 'Networking Events'],
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
    // Properties for University of Tokyo...
    campusLocation: 'Tokyo, Japan',
    yearEstablishment: '1877',
    vision: 'To be a world-leading research university and foster global leaders.',
    mission: 'To contribute to society through the creation of knowledge.',
    applicationRequirements: [
      'Completed online application',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'Japanese language proficiency test scores (if applicable)',
    ],
    applicationDates: 'Deadlines vary based on the course and program of study.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'Interview (for some programs)',
      'Relevant experience (for certain programs)',
    ],
    entranceExams: 'Most programs do not require entrance exams, but some may have additional assessments or interviews.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews.',
    campusInfrastructure: 'Modern campus with advanced research facilities.',
    hostelFacilities: 'On-campus and off-campus housing options available.',
    foodAndDining: 'Various dining options offering traditional Japanese cuisine and international dishes.',
    studentSupportServices: 'Academic advising, career services, and counseling support.',
    notableAlumni: ['Takeshi Kitano', 'Shinzo Abe', 'Yukio Hatoyama'],
    alumniEvents: ['University of Tokyo Alumni Reunion', 'Career Fairs', 'Academic Symposia'],
  },
  {
    id: 10,
    name: 'University of Toronto',
    rating: 4.5,
    admissionDate: '2023-08-15',
    researchCount: 80,
    image: 'https://www.narcity.com/media-library/university-of-toronto-voted-the-best-in-canada-for-dozens-of-subjects.jpg?id=26009799&width=1200&height=600&coordinates=0%2C299%2C0%2C299',
    events: ['Literature Festival', 'Coding Challenge'],
    researchHistory: ['Mathematics Research', 'History Studies'],
    sports: ['Cricket', 'Football', 'Archery'],
    // Properties for University of Toronto...
    campusLocation: 'Toronto, Ontario, Canada',
    yearEstablishment: '1827',
    vision: 'To be a transformative university, boundless in our aspirations.',
    mission: 'To create and sustain a vibrant community for learning and research.',
    applicationRequirements: [
      'Completed online application',
      'Academic transcripts and certificates',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'English language proficiency test scores (if applicable)',
    ],
    applicationDates: 'Deadlines vary based on the course and program of study.',
    selectionCriteria: [
      'Academic achievements and performance',
      'Letters of recommendation',
      'Statement of purpose or essay',
      'Interview (for some programs)',
      'Relevant experience (for certain programs)',
    ],
    entranceExams: 'Most programs do not require entrance exams, but some may have additional assessments or interviews.',
    counselingProcess: 'Shortlisted applicants may be invited for interviews.',
    campusInfrastructure: 'Modern campus with world-class research and academic facilities.',
    hostelFacilities: 'On-campus and off-campus housing options available.',
    foodAndDining: 'Numerous dining options offering diverse cuisines.',
    studentSupportServices: 'Comprehensive support services for academic and personal development.',
    notableAlumni: ['Lester B. Pearson', 'Margaret Atwood', 'David Cronenberg'],
    alumniEvents: ['University of Toronto Alumni Reunion', 'Career Networking Events', 'Academic Workshops'],
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
