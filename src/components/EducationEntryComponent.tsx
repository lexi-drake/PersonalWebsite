import EducationEntry from "../models/EducationEntry";

interface EducationEntryComponentProps {
    entry: EducationEntry;
}

const EducationEntryComponent = (props: EducationEntryComponentProps) => {

    return (
        <div className="education-entry">
            <div className="degree">{props.entry.degree}, {props.entry.field}</div>
            <div className="school">{props.entry.year}, {props.entry.school}</div>
        </div>
    );
}

export default EducationEntryComponent;