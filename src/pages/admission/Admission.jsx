import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Admission = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}&`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            selectedCollege,
            candidateName,
            subject,
            candidateEmail,
            candidatePhone,
            address,
            dob,
            image,
          } = data;
          console.log(data);

          const newAdmission = {
            college: selectedCollege,
            candidateName: candidateName,
            subject: subject,
            candidateEmail: candidateEmail,
            candidatePhone: candidatePhone,
            address: address,
            dob: dob,
            image: image,
          };
          console.log(newAdmission);

          // add new candidate:
          axiosSecure.post('/admission', newAdmission).then((data) => {
            console.log('New Admission:', data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Admission successful!',
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
        }
      });
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Admission Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="selectedCollege"
            >
              Select a College
            </label>
            <select
              id="selectedCollege"
              name="selectedCollege"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              {...register('selectedCollege', { required: true })}
            >
              <option value="">Select a college</option>
              <option value="Harvard University">Harvard University</option>
              <option value="Stanford University">Stanford University</option>
              <option value="University of Oxford">University of Oxford</option>
              <option value="Massachusetts Institute of Technology (MIT)">
                Massachusetts Institute of Technology (MIT)
              </option>
              <option value="University of Cambridge">
                University of Cambridge
              </option>
              <option value="ETH Zurich (Swiss Federal Institute of Technology)">
                ETH Zurich (Swiss Federal Institute of Technology)
              </option>
              <option value="National University of Singapore (NUS)">
                National University of Singapore (NUS)
              </option>
              <option value="California Institute of Technology (Caltech)">
                California Institute of Technology (Caltech)
              </option>
              <option value="University of Tokyo">University of Tokyo</option>
              <option value="University of Toronto">
                University of Toronto
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="candidateName"
            >
              Candidate Name
            </label>
            <input
              type="text"
              id="candidateName"
              name="candidateName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter candidate name"
              {...register('candidateName', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter subject"
              {...register('subject', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="candidateEmail"
            >
              Candidate Email
            </label>
            <input
              type="email"
              id="candidateEmail"
              name="candidateEmail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter candidate email"
              {...register('candidateEmail', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="candidatePhone"
            >
              Candidate Phone number
            </label>
            <input
              type="tel"
              id="candidatePhone"
              name="candidatePhone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter candidate phone number"
              {...register('candidatePhone', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter address"
              {...register('address', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('dob', { required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register('image', { required: true })}
            />
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admission;
