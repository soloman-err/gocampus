const CollegeDetails = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 gap-8">
        {/* College Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-4">College Overview</h2>
          {/* Replace the placeholders with actual data */}
          <p>College Name: [Insert College Name]</p>
          <p>Location: [Insert Location]</p>
          <p>Year of Establishment: [Insert Year]</p>
          <img
            src="[Insert College Logo/Image URL]"
            alt="College Logo"
            className="w-40 h-40 object-cover rounded-full mt-4"
          />
          <p>
            Vision and Mission: [Include the college's vision and mission
            statements]
          </p>
        </div>

        {/* Admission Process */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
          {/* Replace the placeholders with actual data */}
          <p>
            Application Requirements: [Outline the documents and criteria for
            admission]
          </p>
          <p>
            Application Dates: [Specify the deadlines for application
            submission]
          </p>
          <p>
            Selection Criteria: [Explain the factors considered for admission]
          </p>
          <p>
            Entrance Exams: [If applicable, mention the entrance exams required]
          </p>
          <p>
            Counseling Process: [Explain the counseling or interview process]
          </p>
        </div>

        {/* Events and Extracurricular Activities */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Events and Extracurricular Activities
          </h2>
          {/* Replace the placeholders with actual data */}
          <p>
            Annual Fest: [Describe the college's flagship cultural/technical
            fest]
          </p>
          <p>
            Workshops and Seminars: [List the workshops and seminars regularly
            conducted]
          </p>
          <p>
            Guest Lectures: [Highlight prominent guest speakers invited to the
            college]
          </p>
          <p>
            Clubs and Societies: [Mention various student clubs and societies
            available]
          </p>
        </div>

        {/* Research and Innovation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Research and Innovation</h2>
          {/* Replace the placeholders with actual data */}
          <p>
            Research Projects: [Describe ongoing and past research projects]
          </p>
          <p>
            Faculty Publications: [Highlight notable publications by the college
            faculty]
          </p>
          <p>
            Research Facilities: [Mention any state-of-the-art research
            facilities]
          </p>
        </div>

        {/* Sports and Athletics */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sports and Athletics</h2>
          {/* Replace the placeholders with actual data */}
          <p>
            Sports Facilities: [Describe the sports facilities available on
            campus]
          </p>
          <p>
            Sports Teams: [List the different sports teams representing the
            college]
          </p>
          <p>
            Intercollegiate Tournaments: [Mention any sports events the college
            participates in]
          </p>
          <p>Achievements: [Highlight any notable achievements in sports]</p>
        </div>

        {/* Campus Life */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Campus Life</h2>
          {/* Replace the placeholders with actual data */}
          <p>
            Campus Infrastructure: [Describe the campus buildings and
            facilities]
          </p>
          <p>
            Hostel Facilities: [Explain the accommodation options for students]
          </p>
          <p>Food and Dining: [Highlight the campus dining options]</p>
          <p>
            Student Support Services: [Mention counseling, health, and career
            services]
          </p>
        </div>

        {/* Alumni Network */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Alumni Network</h2>
          {/* Replace the placeholders with actual data */}
          <p>Notable Alumni: [List some successful and well-known alumni]</p>
          <p>Alumni Events: [Mention any events or reunions for alumni]</p>
        </div>

        {/* Gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          {/* Insert images using Tailwind CSS */}
          {/* e.g., <img src="[Image URL]" alt="Image Description" className="w-full h-auto mb-4" /> */}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
