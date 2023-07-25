import { useLocation } from 'react-router-dom';

const ResearchPaper = () => {
  const location = useLocation();
  const paper = location.state?.paper;
  const {
    id,
    title,
    authors,
    publicationYear,
    link,
    image,
    abstract,
    introduction,
    literatureReview,
    methodology,
    results,
    discussion,
    conclusion,
    references,
    acknowledgments,
    authorInformation,
    additionalInformation,
  } = paper;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <img
          src={image}
          alt="Research Paper Image"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">
            <strong>Abstract:</strong> {abstract}
          </p>
          <h2 className="text-xl font-bold mb-4">Introduction:</h2>
          <p className="text-gray-600 mb-6">{introduction}</p>
          <h2 className="text-xl font-bold mb-4">Literature Review:</h2>
          <p className="text-gray-600 mb-6">{literatureReview}</p>
          <h2 className="text-xl font-bold mb-4">Methodology:</h2>
          <p className="text-gray-600 mb-6">{methodology}</p>
          <h2 className="text-xl font-bold mb-4">Results:</h2>
          <p className="text-gray-600 mb-6">{results}</p>
          <h2 className="text-xl font-bold mb-4">Discussion:</h2>
          <p className="text-gray-600 mb-6">{discussion}</p>
          <h2 className="text-xl font-bold mb-4">Conclusion:</h2>
          <p className="text-gray-600 mb-6">{conclusion}</p>
          <h2 className="text-xl font-bold mb-4">References:</h2>
          <p className="text-gray-600 mb-6">{references}</p>
          <h2 className="text-xl font-bold mb-4">Acknowledgments:</h2>
          <p className="text-gray-600 mb-6">{acknowledgments}</p>
          <h2 className="text-xl font-bold mb-4">Author Information:</h2>
          <p className="text-gray-600 mb-6">{authorInformation}</p>
          <h2 className="text-xl font-bold mb-4">Additional Information:</h2>
          <p className="text-gray-600 mb-6">{additionalInformation}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
