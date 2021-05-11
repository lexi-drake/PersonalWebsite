import { FunctionComponent } from "react";

const Title: FunctionComponent = (props: any) =>
    <div className='title'>
        {props.children}
        <div className="accent" />
    </div>;

export default Title;