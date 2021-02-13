import Container from "../components/Container";
import EducationEntryComponent from "../components/EducationEntryComponent";
import Header from "../components/Header";
import JobEntryComponent from "../components/JobEntryComponent";
import Section from "../components/Section";
import EducationEntry from "../models/EducationEntry";
import JobEntry from "../models/JobEntry";

interface ResumeProps {

}

const Resume = (props: ResumeProps) => {
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
        <Container>
            <Header>
                <h1>Alexa Drake</h1>
            </Header>
            <Section>
                <h1>Employment history</h1>
                {jobHistory.map(x => <JobEntryComponent entry={x} />)}
            </Section>
            <Section>
                <h1>Education</h1>
                {educationHistory.map(x => <EducationEntryComponent entry={x} />)}
            </Section>
            <Section>
                <h1>Links & contact</h1>
                <a href="letskeepit.cheap" target="_blank" rel="noreferrer">letskeepit.cheap</a>
                <a href="github.com/lexi-drake" target="_blank" rel="noreferrer">github</a>
                <a href="mailto:alexa11drake@gmail.com">email</a>
            </Section>
        </Container>
    )
}

export default Resume;