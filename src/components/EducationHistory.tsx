import EducationEntry from "../models/EducationEntry";
import { educationHistory } from '../utilities/constants';
import Title from './Title';

const EducationHistory = (props: any) =>
    <div className="education-history">
        <div className="content">
            <Title><h1>Education</h1></Title>
            {educationHistory.map(x => <EducationEntryComponent key={x.degree} entry={x} />)}
        </div>
    </div>;

export default EducationHistory;

interface EducationEntryComponentProps {
    entry: EducationEntry;
}

const EducationEntryComponent = (props: EducationEntryComponentProps) =>
    <div className="education-entry">
        <div className="degree">{props.entry.degree}, {props.entry.field}</div>
        <div className="school">{props.entry.year}, {props.entry.school}</div>
    </div>;