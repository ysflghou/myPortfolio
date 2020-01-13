import Educ from "@/models/Educ";

const educations: Educ[] = [
  {
    id: 1,
    title: "Software Engineering",
    school: "Hassania School of Public Works (EHTP)",
    location: "Casablanca Prefecture, Morocco",
    fromDate: "09-01-2016", // mm-dd-yyyy
    toDate: "06-30-2019"
  },
  {
    id: 2,
    title: "Preparatory Classes (MP)",
    school: "Mohamed VI high school",
    location: "Rabat, Morocco",
    fromDate: "09-01-2014", // mm-dd-yyyy
    toDate: "06-30-2016"
  },
  {
    id: 3,
    title: "High school",
    school: "Moulay Rchid high school",
    location: "Mechraa Belksiri, Morocco",
    fromDate: "09-15-2011", // mm-dd-yyyy
    toDate: "06-30-2014"
  }
];
export default {
  GetEducations() {
    return educations;
  }
};
