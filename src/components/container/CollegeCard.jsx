import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {

  return (
    <div className="w-[80%] md:w-full xl:w-[80%] mx-auto flex flex-col justify-between bg-white shadow-lg overflow-hidden h-full">
      <div className="rounded overflow-hidden">
        <img
          className="w-full h-40 object-cover"
          src={college?.image}
          alt={college?.name}
        />
        <div className="px-3 py-4">
          <div className="font-bold text-xl mb-2">{college?.name}</div>
          <div className="text-sm mb-4">
            <span className="font-semibold">Admission Dates: </span>
            {college?.admissionDate}
          </div>
          <div className="text-sm mb-4">
            <span className="font-semibold">Events: </span>
            {college?.events?.map((event, index) => (
              <span key={index} className="mr-2">
                {event}
              </span>
            ))}
          </div>
          <div className="text-sm mb-4">
            <span className="font-semibold">Research History: </span>
            <ul>
              {college?.researchHistory?.map((research, index) => (
                <li key={index}>{research}</li>
              ))}
            </ul>
          </div>
          <div className="text-sm mb-4">
            <span className="font-semibold">Sports: </span>
            {college?.sports?.map((sport, index) => (
              <span key={index} className="mr-2">
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link to={'/college-details'}>
        <button className="btn w-full btn-sm rounded-none mt-auto">
          Details
        </button>
      </Link>
    </div>
  );
};

export default CollegeCard;
