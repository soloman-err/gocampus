const Research = () => {
  const researchPapers = [
    {
      id: 1,
      title: 'The Impact of Climate Change on Biodiversity',
      link: 'https://www.example.com/research-paper1',
    },
    {
      id: 2,
      title: 'Artificial Intelligence and its Ethical Implications',
      link: 'https://www.example.com/research-paper2',
    },
    {
      id: 3,
      title: 'Advancements in Renewable Energy Technologies',
      link: 'https://www.example.com/research-paper3',
    },
    // Add more research papers as needed
  ];

  return (
    <section className="w-[80%] mx-auto mt-20 px-5 md:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Recommended Research Papers
        </h2>
        <div className="grid gap-4">
          {researchPapers.map((paper) => (
            <div key={paper.id} className="bg-white py-12 px-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2 uppercase">{paper.title}</h3>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {paper.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
