import { FunctionComponent } from "react";

interface SectionProps {

}

const Section: FunctionComponent<SectionProps> = (props) => {
    return (
        <div className="section">
            {props.children}
        </div>
    );
}

export default Section;