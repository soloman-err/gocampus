import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useCollege from '../../hooks/useCollege';

const MyCollege = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [admittedCollege]= useCollege();
  console.log(admittedCollege);
  const admitted = admittedCollege[0];
  // const {image, college, address, candidateEmail, candidatePhone, dob, subject} = admitted;
  // console.log(admitted);

  // if(!admitted){
  //   return <div>No admission available</div>
  // }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My College Details</h1>
        <p className="mt-4 text-lg">
          Here are the details of your admitted college:
        </p>
      </div>
      {/* Image Field */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">College Image</h2>
        <img
          // src={image}
          alt="College"
          className="w-full max-w-lg mt-2"
        />
      </div>

      <div className="mt-8">
        {/* College Details */}
        <h2 className="text-2xl font-bold">College Name</h2>
        {/* <p className="mt-2 text-lg text-gray-700">{college}</p> */}

        <h2 className="text-2xl font-bold mt-4">Location</h2>
        {/* <p className="mt-2 text-lg text-gray-700">{address}</p> */}

        <h2 className="text-2xl font-bold mt-4">Description</h2>
        <p className="mt-2 text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          orci eu nulla lacinia dignissim eu at lorem.
        </p>

        {/* Review Input */}
        <div className="mt-8 flex flex-col">
          <h2 className="text-2xl font-bold">Add Review</h2>
          <textarea
            className="mt-2 p-4 w-full max-w-lg h-32 border border-gray-300 rounded-lg"
            placeholder="Write your review"
            {...register('review')}
          ></textarea>
          {/* Add a rating input field here (if you have a rating system) */}
          <button className="btn btn-wide btn-sm mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
