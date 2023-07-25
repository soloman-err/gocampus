import CollegeCard from '../../components/container/CollegeCard';

const Featured = () => {
  const colleges = [
    {
      name: 'Boston University',
      image: 'https://i0.wp.com/whstheshield.com/wp-content/uploads/2020/10/Back2BU-information-site-1.png?resize=768%2C402&ssl=1',
      admissionDate: 'Fall 2023 - Spring 2023',
      events: ['Open House Day', 'Scholarship Fair', 'Alumni Reunion'],
      researchHistory: ['Biotechnology', 'Artificial Intelligence', 'Sustainable Energy'],
      sports: ['Football', 'Basketball', 'Swimming', 'Track & Field'],
      // Properties for Boston University...
      campusLocation: 'Boston, Massachusetts, USA',
      yearEstablishment: '1839',
      vision: 'To be a leading global research university addressing societal challenges through interdisciplinary education and research.',
      mission: 'To educate and empower students to thrive, to create groundbreaking knowledge, and to be engaged and active global citizens.',
      applicationRequirements: [
        'Completed application form',
        'Transcripts from previous educational institutions',
        'Letters of recommendation',
        'Standardized test scores (SAT/ACT/GRE/GMAT)',
        'Personal statement or essay',
      ],
      applicationDates: 'Deadlines vary based on the program and degree level.',
      selectionCriteria: [
        'Academic achievements and performance',
        'Extracurricular activities and achievements',
        'Letters of recommendation',
        'Personal statement or essay',
        'Standardized test scores (SAT/ACT/GRE/GMAT)',
      ],
      entranceExams: 'SAT or ACT for undergraduate admissions, GRE or GMAT for graduate admissions.',
      counselingProcess: 'Applicants may be interviewed by admissions counselors.',
      campusInfrastructure: 'Modern campus with state-of-the-art facilities, libraries, and research centers.',
      hostelFacilities: 'On-campus housing available for students.',
      foodAndDining: 'Various dining options, including cafeterias and restaurants.',
      studentSupportServices: 'Counseling, health center, career services, and more.',
      notableAlumni: ['Martin Luther King Jr.', 'Julianne Moore', 'Howard Stern'],
      alumniEvents: ['Boston University Alumni Weekend', 'Networking Events', 'Career Fairs'],
    },
    {
      name: 'Horizon Campus',
      image: 'https://i.ytimg.com/vi/M4gx72b8IbM/maxresdefault.jpg',
      admissionDate: 'Summer 2023 - Winter 2023',
      events: ['New Student Orientation', 'Career Fair', 'Cultural Fest'],
      researchHistory: ['Environmental Studies', 'Psychology and Neuroscience', 'Entrepreneurship and Innovation'],
      sports: ['Soccer', 'Tennis', 'Volleyball', 'Cross-country'],
      // Properties for Horizon Campus...
      campusLocation: 'Somewhere, USA', // Replace with actual location
      yearEstablishment: 'Year of establishment', // Replace with actual year
      vision: 'Vision statement of Horizon Campus.',
      mission: 'Mission statement of Horizon Campus.',
      applicationRequirements: [
        'Completed application form',
        'Transcripts from previous educational institutions',
        'Letters of recommendation',
        'Standardized test scores (SAT/ACT/GRE/GMAT)',
        'Personal statement or essay',
      ],
      applicationDates: 'Deadlines vary based on the program and degree level.',
      selectionCriteria: [
        'Academic achievements and performance',
        'Extracurricular activities and achievements',
        'Letters of recommendation',
        'Personal statement or essay',
        'Standardized test scores (SAT/ACT/GRE/GMAT)',
      ],
      entranceExams: 'SAT or ACT for undergraduate admissions, GRE or GMAT for graduate admissions.',
      counselingProcess: 'Applicants may be interviewed by admissions counselors.',
      campusInfrastructure: 'Modern campus with state-of-the-art facilities and libraries.',
      hostelFacilities: 'On-campus housing available for students.',
      foodAndDining: 'Various dining options, including cafeterias and restaurants.',
      studentSupportServices: 'Counseling, health center, career services, and more.',
      notableAlumni: ['Notable alumni of Horizon Campus'],
      alumniEvents: ['Horizon Campus Alumni Reunion', 'Networking Events', 'Career Fairs'],
    },
    {
      name: 'Lancaster University',
      image: 'https://media.studentcrowd.net/q90/content/Pages/Articles/uni-awards-21-uni-pics/lancaster-uni.jpeg',
      admissionDate: 'Spring 2023 - Fall 2023',
      events: ['Campus Carnival', 'Leadership Conference', 'Science Exhibition'],
      researchHistory: ['Astrophysics and Space Science', 'Data Science and Analytics', 'Public Health and Epidemiology'],
      sports: ['Baseball', 'Softball', 'Rugby', 'Badminton'],
      // Properties for Lancaster University...
      campusLocation: 'Lancaster, United Kingdom',
      yearEstablishment: '1964',
      vision: 'To be a world-leading university, recognized for excellent research, outstanding teaching, and the positive impact we make in society and communities.',
      mission: 'To provide an environment for learning, research, and enterprise to the highest international standards.',
      applicationRequirements: [
        'Completed application form',
        'Transcripts from previous educational institutions',
        'Letters of recommendation',
        'Standardized test scores (SAT/ACT/GRE/GMAT)',
        'Personal statement or essay',
      ],
      applicationDates: 'Deadlines vary based on the program and degree level.',
      selectionCriteria: [
        'Academic achievements and performance',
        'Extracurricular activities and achievements',
        'Letters of recommendation',
        'Personal statement or essay',
        'Standardized test scores (SAT/ACT/GRE/GMAT)',
      ],
      entranceExams: 'SAT or ACT for undergraduate admissions, GRE or GMAT for graduate admissions.',
      counselingProcess: 'Applicants may be interviewed by admissions counselors.',
      campusInfrastructure: 'Modern campus with state-of-the-art facilities and libraries.',
      hostelFacilities: 'On-campus housing available for students.',
      foodAndDining: 'Various dining options, including cafeterias and restaurants.',
      studentSupportServices: 'Counseling, health center, career services, and more.',
      notableAlumni: ['Notable alumni of Lancaster University'],
      alumniEvents: ['Lancaster University Alumni Reunion', 'Networking Events', 'Career Fairs'],
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
