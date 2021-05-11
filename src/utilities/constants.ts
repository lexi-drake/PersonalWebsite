import JobEntry from '../models/JobEntry';
import EducationEntry from '../models/EducationEntry';

export const jobHistory: JobEntry[] = [
    { title: "Lead Software Engineer", employer: "QBE Digital Innovation Lab", startDate: "August 2020", endDate: "Present" },
    { title: "Technical Lead", employer: "Nvisia", startDate: "July 2019", endDate: "August 202" },
    { title: "Backend Developer", employer: "Fetch Rewards", startDate: "January 2019", endDate: "June 2019" },
    { title: "Lead Researcher", employer: "QBE Digital Innovation Lab", startDate: "May 2017", endDate: "May 2018" },
    { title: "Senior Developer", employer: "QBE Digital Innovation Lab", startDate: "September 2016", endDate: "May 2017" },
    { title: "Developer", employer: "QBE Digital Innovation Lab", startDate: "May 2016", endDate: "September 2016" }
];

export const educationHistory: EducationEntry[] = [
    { degree: "MS", field: "Biology: Physiology and Behavior", school: "San Francisco State University", year: "2014" },
    { degree: "BA", field: "Psychology", school: "San Francisco State University", year: "2012" }
];