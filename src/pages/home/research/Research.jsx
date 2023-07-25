import { Link } from "react-router-dom";

const Research = () => {
  const researchPapers = [
    {
      id: 1,
      title: 'The Impact of Climate Change on Biodiversity',
      authors: 'John Doe, Jane Smith',
      publicationYear: 2022,
      link: 'https://www.example.com/research-paper1',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcmjAe1I73vMX8bPOtxUrwl0W9CTuWhU_Zg&usqp=CAU',
      abstract:
        'This research paper investigates the effects of climate change on biodiversity in various ecosystems. The study aims to identify the major threats to different species and ecosystems caused by climate change and proposes potential mitigation strategies to conserve biodiversity.',
      introduction:
        'Climate change has emerged as one of the most pressing global challenges of our time...',
      literatureReview:
        'Several previous studies have highlighted the link between climate change and its adverse impacts on biodiversity...',
      methodology:
        'A comprehensive and multidisciplinary approach was adopted to assess the impacts of climate change on biodiversity...',
      results:
        'The research revealed alarming trends in the decline of certain species and disturbances in ecosystem dynamics...',
      discussion:
        'The results emphasize the urgent need for immediate action to address climate change impacts on biodiversity...',
      conclusion:
        'In conclusion, this study provides compelling evidence of the far-reaching consequences of climate change on biodiversity...',
      references:
        '1. Smith, A. (2020). Climate Change and Biodiversity. Journal of Environmental Science, 15(2), 45-60. doi:10.xxxx/xxxxxx...',
      acknowledgments:
        'The authors express their gratitude to the XYZ Research Institute for their valuable support and resources...',
      authorInformation: 'John Doe - Department of Environmental Studies, ABC University, john.doe@example.com',
      additionalInformation:
        'Funding: This research was supported by the National Science Foundation under Grant No. XXXXXXX...',
    },
    {
      id: 2,
      title: 'Artificial Intelligence and its Ethical Implications',
      authors: 'Alice Johnson, Bob Anderson',
      publicationYear: 2023,
      link: 'https://www.example.com/research-paper2',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEVUlBlCgr_kd_W5QLqjTi8bUe9R2TaIbjg&usqp=CAU',
      abstract:
        'This research paper explores the ethical implications of artificial intelligence (AI) in various fields. The study examines the potential risks and benefits of AI adoption and emphasizes the importance of ethical guidelines to guide its development and deployment.',
      introduction:
        'Artificial Intelligence (AI) has rapidly advanced and is now being integrated into...',
      literatureReview:
        'Previous studies have delved into the ethical considerations of AI, touching on topics such as...',
      methodology:
        'A qualitative research approach was taken to gather insights from experts in AI ethics and various stakeholders...',
      results:
        'The research identified several key ethical concerns surrounding AI, including issues related to...',
      discussion:
        'The results underscore the need for proactive measures to address ethical challenges in AI development...',
      conclusion:
        'In conclusion, this study highlights the significance of integrating ethics into AI development...',
      references:
        '1. Anderson, B. (2023). Artificial Intelligence and Ethics. Journal of Technology and Ethics, 20(3), 112-128. doi:10.xxxx/xxxxxx...',
      acknowledgments:
        'The authors would like to extend their thanks to the AI Ethics Institute for their valuable insights and support...',
      authorInformation: 'Alice Johnson - Department of Computer Science, XYZ University, alice.johnson@example.com',
      additionalInformation:
        'Conflict of Interest: The authors declare no conflicts of interest in conducting this research...',
    },
    {
      id: 3,
      title: 'Advancements in Renewable Energy Technologies',
      authors: 'David Williams, Emily Brown',
      publicationYear: 2021,
      link: 'https://www.example.com/research-paper3',
      image:
        'https://i.pinimg.com/originals/dd/66/04/dd6604ce7d96228f4c79571d455c0446.jpg',
      abstract:
        'This research paper explores recent advancements in renewable energy technologies and their potential to revolutionize the energy sector. The study assesses the feasibility and benefits of various renewable energy sources, including solar, wind, and hydroelectric power.',
      introduction:
        'The transition from fossil fuels to renewable energy sources has gained significant momentum...',
      literatureReview:
        'Previous studies have documented the growth of renewable energy installations worldwide, with a focus on...',
      methodology:
        'A comprehensive review of literature and technical reports was conducted to gather data and insights...',
      results:
        'The research highlights the rapid increase in renewable energy adoption and the positive impacts on...',
      discussion:
        'The results underscore the importance of continuing research and investment in renewable energy technologies...',
      conclusion:
        'In conclusion, this study emphasizes the transformative potential of renewable energy technologies in achieving...',
      references:
        '1. Brown, E. (2021). Advancements in Renewable Energy. Journal of Sustainable Energy, 18(4), 250-265. doi:10.xxxx/xxxxxx...',
      acknowledgments:
        'The authors express their gratitude to the Renewable Energy Research Institute for their valuable support...',
      authorInformation: 'David Williams - Department of Energy Engineering, LMN University, david.williams@example.com',
      additionalInformation:
        'Data Availability: The datasets used in this research are available upon request...',
    },
    {
      id: 4,
      title: 'The Role of Microplastics in Ocean Pollution',
      authors: 'Sarah Lee, Michael Davis',
      publicationYear: 2023,
      link: 'https://www.example.com/research-paper4',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/412659116182411.644f5d0177663.png',
      abstract:
        'This research paper investigates the sources, distribution, and impacts of microplastics in ocean ecosystems. The study explores the potential consequences of microplastic pollution on marine life and discusses potential mitigation strategies to combat this global issue.',
      introduction:
        'Microplastics, tiny plastic particles, have become a major concern for marine ecosystems...',
      literatureReview:
        'Previous studies have documented the widespread presence of microplastics in oceans, with an emphasis on...',
      methodology:
        'Water samples were collected from various oceanic regions, and microplastic analysis was performed using...',
      results:
        'The research reveals alarming levels of microplastic pollution in oceans, with adverse effects on marine organisms...',
      discussion:
        'The results underscore the urgent need for international cooperation and concerted efforts to combat...',
      conclusion:
        'In conclusion, this study highlights the crucial role of microplastics in ocean pollution and advocates for...',
      references:
        '1. Lee, S. (2023). Microplastics in Ocean Ecosystems. Marine Pollution Research, 25(5), 300-318. doi:10.xxxx/xxxxxx...',
      acknowledgments:
        'The authors acknowledge the support and assistance provided by the Ocean Conservation Society...',
      authorInformation: 'Sarah Lee - Department of Marine Biology, PQR University, sarah.lee@example.com',
      additionalInformation:
        'Funding: This research was funded by the National Oceanic and Atmospheric Administration (NOAA)...',
    },
  ];

  return (
    <section className="md:w-[80%] mx-auto mt-20 px-5 md:px-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-zinc-800">
          Research Papers
        </h2>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          {researchPapers.map((paper) => (
            <div
              key={paper?.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-between"
            >
              <div className="flex flex-col justify-between">
                <div className="flex">
                  <div className="w-40 p-2">
                    <img
                      src={paper?.image}
                      alt=""
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-4">{paper?.title}</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">Authors:</span>{' '}
                      {paper?.authors}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Publication Year:</span>{' '}
                      {paper?.publicationYear}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-100 px-6 py-4 flex justify-end">
                  <Link to={'/research-paper'}
                  state={{paper}}
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-auto font-semibold"
                  >
                    Read Paper
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
