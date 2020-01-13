import Exp from "@/models/Exp.ts";
const experiences: Exp[] = [
  {
    id: 1,
    poste: "Software Engineer",
    company: "Societe Generale Africa Technologies and Services",
    location: "Casablanca Prefecture, Morocco",
    fromDate: "08-02-2019", // mm-dd-yyyy
    toDate: "01-02-2020",
    description: `Working in a good environment with skilled collaborators on challenging projects,
      using the best practices (SOLID priciples, code reviews, unit tests, continuous integration, ...).`,
    link: "https://africa-technologies-services.sgcib.com/en/"
  },
  {
    id: 2,
    poste: "machine learning intern",
    company: "Societe Generale Africa Technologies and Services",
    location: "Casablanca Prefecture, Morocco",
    fromDate: "02-02-2019",
    toDate: "07-02-2019",
    description: `The goal of my graduation project, was to design and develop a Machine Learning based tool,
      which detects based on code changes, the tests required for development validation.
      My internship included analyzing the problem, analyzing and extracting historical data, preparing a cleaning it.
      and performing feature engineering, ending by selecting the best model to use.
      The project was divided into three parts: the first was data extraction from the CI server and Git history, using C#.
      and the second covers data exploration, Features Engineering and Model Selection, using Python (Numpy, Pandas and scikitlearn).
      the last one focus on the deployment of the model in a .NET architecture`,
    link: "https://africa-technologies-services.sgcib.com/en/"
  },
  {
    id: 3,
    poste: "software engineer intern",
    company: "ONNEE branche eau",
    location: "Rabat, Morocco",
    fromDate: "07-01-2017",
    toDate: "08-31-2017",
    description:
      "Development of a web application for chalets distribution management (PHP)",
    link: "http://www.onep.ma/"
  }
];

export default {
  GetExperiences() {
    return experiences;
  }
};
