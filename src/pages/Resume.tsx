import Container from "../components/Container";
import EducationHistory from "../components/EducationHistory";
import Bio from "../components/Bio";
import RelevantLinks from '../components/RelevantLinks';
import EmploymentHistory from "../components/EmploymentHistory";


const Resume = (props: any) =>
    <Container>
        <h1 className="header">Alexa Drake</h1>
        <Bio />
        <EmploymentHistory />
        <EducationHistory />
        <RelevantLinks />
    </Container>;

export default Resume;