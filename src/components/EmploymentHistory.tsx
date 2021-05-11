import { jobHistory } from '../utilities/constants';
import JobEntry from '../models/JobEntry';
import Title from './Title';

const EmploymentHistory = (props: any) =>
    <div className="employment-history">
        <Title><h1>Employment history</h1></Title>
        {jobHistory.map(x => <JobEntryComponent key={x.title} entry={x} />)}
    </div>;

export default EmploymentHistory;

interface JobEntryComponentProps {
    entry: JobEntry;
}

const JobEntryComponent = (props: JobEntryComponentProps) =>
    <div className="job-entry">
        <div className="job-title">{props.entry.title}, {props.entry.employer}</div>
        <div className="dates">{props.entry.startDate} through {props.entry.endDate}</div>
    </div>;