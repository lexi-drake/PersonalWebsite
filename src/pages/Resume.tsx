import Container from "../components/Container";
import EducationHistory from "../components/EducationHistory";
import Bio from "../components/Bio";
import Title from '../components/Title';
import RelevantLinks from '../components/RelevantLinks';
import EmploymentHistory from "../components/EmploymentHistory";

interface ResumeProps {

}

const Resume = (props: ResumeProps) => {

    return (
        <Container>
            <Title>
                <h1>Alexa Drake</h1>
            </Title>
            <Bio />
            <EmploymentHistory />
            <EducationHistory />
            <RelevantLinks />
        </Container>
    )
}

export default Resume;