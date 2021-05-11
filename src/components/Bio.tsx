import Title from './Title';

interface BioProps {

}

const Bio = (props: BioProps) =>
    <div className="bio">
        <Title>
            <h1>Biography</h1>
        </Title>
        <p>
            Alexa started writing software to assist with academic research conducted
            at San Francisco State University and the University of California, San Francisco.
            While pursuing a PhD in neuroscience at the University of Wisconsin, Madison,
            she realized her interest in participating in basic science paled in comparison
            to her passion for writing code.
        </p>
        <p>
            As a software developer, Alexa leans on her curiosity, explores technology,
            learns and adopts new practices and methodologies. Her experience researching
            neural development has prepared her for a life of learning, of never quite
            knowing enough.
        </p>
        <p>
            When not writing code, Alexa can be found hiking with her dog, tending to her
            vegetable garden, or working on a home-maintenance or remodel project. She approaches
            everything she does with enthusiasm and creativity.
        </p>
    </div>;

export default Bio;