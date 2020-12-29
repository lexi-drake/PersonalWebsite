import React from 'react';
import './App.css';

interface JobEntry {
  title: string;
  employer: string;
  startDate: string;
  endDate: string;
}

interface EducationEntry {
  degree: string;
  field: string;
  school: string;
  year: string;
}

function App() {

  const jobHistory: JobEntry[] = [
    { title: "Lead Engineer", employer: "QBE Digital Innovation Lab", startDate: "August 2020", endDate: "Present" },
    { title: "Technical Lead", employer: "Nvisia", startDate: "July 2019", endDate: "August 202" },
    { title: "Backend Developer", employer: "Fetch Rewards", startDate: "January 2019", endDate: "June 2019" },
    { title: "Lead Researcher", employer: "QBE Digital Innovation Lab", startDate: "May 2017", endDate: "May 2018" },
    { title: "Senior Developer", employer: "QBE Digital Innovation Lab", startDate: "September 2016", endDate: "May 2017" },
    { title: "Developer", employer: "QBE Digital Innovation Lab", startDate: "May 2016", endDate: "September 2016" }
  ];

  const educationHistory: EducationEntry[] = [
    { degree: "MS", field: "Biology: Physiology and Behavior", school: "San Francisco State University", year: "2014" },
    { degree: "BA", field: "Psychology", school: "San Francisco State University", year: "2012" }
  ];

  return (
    <div className="App">
      <h1>Alexa Drake</h1>
      <div className="employment">
        <h2>Employment History</h2>
        {jobHistory.map(x =>
          <div>
            <strong>{x.title}, {x.employer}</strong><br />
            <i>{x.startDate} through {x.endDate}</i>
          </div>)}
      </div>
      <div className="education">
        <h2>Education</h2>
        {educationHistory.map(x =>
          <div>
            <strong>{x.degree}, {x.field}</strong><br />
            <i>{x.year}, {x.school}</i>
          </div>)}
      </div>
    </div>
  );
}

export default App;
