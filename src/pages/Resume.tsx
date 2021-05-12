import Container from "../components/Container";
import EducationHistory from "../components/EducationHistory";
import Header from '../components/Header';
import Bio from "../components/Bio";
import RelevantLinks from '../components/RelevantLinks';
import EmploymentHistory from "../components/EmploymentHistory";


const Resume = (props: any) =>
    <Container>
        <Header />
        <Bio />
        <EmploymentHistory />
        <EducationHistory />
        <RelevantLinks />
    </Container>;

export default Resume;