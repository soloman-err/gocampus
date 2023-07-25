import { useLocation } from 'react-router-dom';

const CollegeDetails = () => {
  const location = useLocation();
  const college = location.state?.college || null;
  const {
    id,
    name,
    rating,
    admissionDate,
    researchCount,
    image,
    events,
    researchHistory,
    sports,
    campusLocation,
    yearEstablishment,
    vision,
    mission,
    applicationRequirements,
    applicationDates,
    selectionCriteria,
    entranceExams,
    counselingProcess,
    campusInfrastructure,
    hostelFacilities,
    foodAndDining,
    studentSupportServices,
    notableAlumni,
    alumniEvents,
  } = college;
  console.log(events);

  if (!college) {
    // Handle the case where the college object is not available
    return <div>No college details found.</div>;
  }

  return (
    <div className="w-full pb-10 mx-auto px-10 xl:px-20">
      <img
        src={image}
        alt="College-image"
        className="w-full h-60 md:h-[500px] lg:h-[600px] xl:h-[800px] object-cove mt-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-50 p-5">
        {/* College Overview */}
        <div>
          <h2 className="text-2xl font-bold mb-4">College Overview</h2>
          <p>
            <span className="font-bold">College Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Location:</span> {campusLocation}
          </p>
          <p>
            <span className="font-bold">Year of Establishment:</span>{' '}
            {yearEstablishment}
          </p>

          <p>
            <span className="font-bold">Vision and Mission: </span>
            {vision}
          </p>
        </div>

        {/* Admission Process */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Admission Process</h2>
          <p>
            <span className="font-bold">Application Requirements: </span>
            {selectionCriteria?.map((e, i) => (
              <span key={i}>
                {e} {i !== events.length - 1 && ', '}
              </span>
            )) || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Application Dates: </span>
            {applicationDates}
          </p>
          <p>
            <span className="font-bold">Selection Criteria:</span>{' '}
            {applicationRequirements?.map((e, i) => (
              <span key={i}>
                {e} {i !== events.length - 1 && ', '}
              </span>
            )) || 'Data not available'}
            {}
          </p>
          <p>
            <span className="font-bold">Entrance Exams:</span> {entranceExams}
          </p>
          <p>
            <span className="font-bold">Counseling Process:</span>{' '}
            {counselingProcess}
          </p>
        </div>

        {/* Events and Extracurricular Activities */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Events and Extracurricular Activities
          </h2>
          <p>
            <span className="font-bold">Annual Fest: </span>
            {events?.map((e, i) => (
              <span key={i}>
                {e} {i !== events.length - 1 && ', '}
              </span>
            )) || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Workshops and Seminars:</span>{' '}
            {researchHistory?.map((e, i) => (
              <span key={i}>
                {e} {i !== events.length - 1 && ', '}
              </span>
            )) || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Guest Lectures:</span>{' '}
            {events?.guestLectures || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Clubs and Societies:</span>{' '}
            {events?.clubsAndSocieties || 'Data not available'}
          </p>
        </div>

        {/* Research and Innovation */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Research and Innovation</h2>
          <p>
            <span className="font-bold">Research Projects:</span>{' '}
            {researchHistory?.researchProjects || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Faculty Publications:</span>{' '}
            {researchHistory?.facultyPublications || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Research Facilities:</span>{' '}
            {researchHistory?.researchFacilities || 'Data not available'}
          </p>
        </div>

        {/* Sports and Athletics */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Sports and Athletics</h2>
          <p>
            <span className="font-bold">Sports Facilities:</span>{' '}
            {sports?.sportsFacilities || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Sports Teams:</span>{' '}
            {sports?.sportsTeams || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Intercollegiate Tournaments:</span>{' '}
            {sports?.intercollegiateTournaments || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Achievements:</span>{' '}
            {sports?.achievements || 'Data not available'}
          </p>
        </div>

        {/* Campus Life */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Campus Life</h2>
          <p>
            <span className="font-bold">Campus Infrastructure:</span>{' '}
            {campusInfrastructure || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Hostel Facilities:</span>{' '}
            {hostelFacilities || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Food and Dining:</span>{' '}
            {foodAndDining || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Student Support Services:</span>{' '}
            {studentSupportServices || 'Data not available'}
          </p>
        </div>

        {/* Alumni Network */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Alumni Network</h2>
          <p>
            <span className="font-bold">Notable Alumni:</span>{' '}
            {notableAlumni?.join(', ') || 'Data not available'}
          </p>
          <p>
            <span className="font-bold">Alumni Events:</span>{' '}
            {alumniEvents || 'Data not available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
