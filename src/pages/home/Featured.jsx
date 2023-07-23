import CollegeCard from '../../components/container/CollegeCard';

const Featured = () => {
  const colleges = [
    {
      name: 'ABC University',
      imageUrl:
        'https://www.cnu.org/sites/default/files/styles/public_square_feature_image/public/BostonCollege1.jpg',
      admissionDates: 'Fall 20XX - Spring 20XX',
      events: ['Open House Day', 'Scholarship Fair', 'Alumni Reunion'],
      researchHistory: [
        'Biotechnology',
        'Artificial Intelligence',
        'Sustainable Energy',
      ],
      sports: ['Football', 'Basketball', 'Swimming', 'Track & Field'],
    },
    {
      name: 'XYZ College',
      imageUrl: 'https://i.ytimg.com/vi/M4gx72b8IbM/maxresdefault.jpg',
      admissionDates: 'Summer 20XX - Winter 20XX',
      events: ['New Student Orientation', 'Career Fair', 'Cultural Fest'],
      researchHistory: [
        'Environmental Studies',
        'Psychology and Neuroscience',
        'Entrepreneurship and Innovation',
      ],
      sports: ['Soccer', 'Tennis', 'Volleyball', 'Cross-country'],
    },
    {
      name: 'PQR Institute',
      imageUrl:
        'https://media.studentcrowd.net/q90/content/Pages/Articles/uni-awards-21-uni-pics/lancaster-uni.jpeg',
      admissionDates: 'Spring 20XX - Fall 20XX',
      events: [
        'Campus Carnival',
        'Leadership Conference',
        'Science Exhibition',
      ],
      researchHistory: [
        'Astrophysics and Space Science',
        'Data Science and Analytics',
        'Public Health and Epidemiology',
      ],
      sports: ['Baseball', 'Softball', 'Rugby', 'Badminton'],
    },
  ];

  return (
    <section className="mt-10 md:mt-20 lg:px-20 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {colleges.map((college, index) => (
          <CollegeCard key={index} college={college} />
        ))}
      </div>
    </section>
  );
};

export default Featured;