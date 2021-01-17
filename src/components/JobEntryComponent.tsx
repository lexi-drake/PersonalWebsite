import JobEntry from "../models/JobEntry"

interface JobEntryComponentProps {
    entry: JobEntry;
}

const JobEntryComponent = (props: JobEntryComponentProps) => {
    return (
        <div className="job-entry">
            <div className="title">{props.entry.title}, {props.entry.employer}</div>
            <div className="dates">{props.entry.startDate} through {props.entry.endDate}</div>
        </div>
    );
}

export default JobEntryComponent;