import React from "react";
import '../styles/About.css';
import FadeInSection from "./FadeInSection";

class About extends React.Component {
    constructor(){
        super();
        this.state = {
            expanded: true,
            activeKey: '1'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(eventKey){
        this.setState({
            activeKey: eventKey
        });
    }
    render(){
        const one = (
            <p>
                My name is Cheng Han, but I go by Johnson! 
                I am currently undertaking a <b>Bachelor’s of Science</b> in 
                <b> Computer Science</b> at the <a href="https://www.ucsb.edu/about">University of California, Santa Barbara</a> and will be complete the degree in June 2024. 
                Currently I am also taking an internship at <a href="https://ystemandchess.com/about-us">Y STEM and Chess</a> while 
                performing as a <a href="https://cs.ucsb.edu/education/undergraduate/learning-assistant-program">Undergraduate Learning Assistant</a> at UCSB.
            </p>
        );
        const two = (
            <p>
                Outside of work you’ll probably find me rock climbing, 
                playing video games (Riot Games ily &lt;3), 
                or obsessing over my latest hyperfixation.
            </p>
        );

        const tech_stack = [
            'Python',
            'Javascript',
            'HTML & CSS',
            'Node.js',
            'React.js',
            'Angular.js',
            'Figma'
        ];

        const tech_items = tech_stack.map(stack => <li>{stack}</li>);

        return (
            <div id='about'>
                <FadeInSection>
                    <div className="section-header">
                        <span className="section-title">About Me</span>
                    </div>
                    <div className="about-content">
                        <div className="about-desc">
                            {[one]}
                            {"I have been working with these technologies:"}
                            <ul className="tech-stack">
                                {tech_stack.map(function (tech_items, i){
                                    return (
                                        <FadeInSection>
                                            <li>{tech_items}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                            {[two]}
                        </div>
                        <div className="about-me-img">
                        </div>
                    </div>
                </FadeInSection>
            </div>
        )
    }
}

export default About;
