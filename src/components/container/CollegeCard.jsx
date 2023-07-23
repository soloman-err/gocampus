const CollegeCard = ({ college }) => {
  return (
    <div className="rounded w-[80%] md:w-full xl:w-[80%] mx-auto overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-40 object-cover"
        src={college?.imageUrl}
        alt={college?.name}
      />
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2">{college?.name}</div>
        <div className="text-sm mb-4">
          <span className="font-semibold">Admission Dates: </span>
          {college?.admissionDates}
        </div>
        <div className="text-sm mb-4">
          <span className="font-semibold">Events: </span>
          {college?.events.map((event, index) => (
            <span key={index} className="mr-2">
              {event}
            </span>
          ))}
        </div>
        <div className="text-sm mb-4">
          <span className="font-semibold">Research History: </span>
          <ul>
            {college?.researchHistory.map((research, index) => (
              <li key={index}>{research}</li>
            ))}
          </ul>
        </div>
        <div className="text-sm mb-4">
          <span className="font-semibold">Sports: </span>
          {college?.sports.map((sport, index) => (
            <span key={index} className="mr-2">
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
