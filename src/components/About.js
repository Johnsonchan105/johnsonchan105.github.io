import React from "react";
import '../styles/About.css';
import FadeInSection from "./FadeInSection";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: '1',
            currentIndex: 0,
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.updateImageIndex = this.updateImageIndex.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(this.updateImageIndex, 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    updateImageIndex() {
        this.setState(prevState => ({
            currentIndex: (prevState.currentIndex + 1) % 5
        }));
    }

    handleImageClick() {
        this.updateImageIndex();
    }

    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        const one = (
            <p>
                Hi! My name is Cheng Han, but I go by Johnson!
                I am working as a <b>Software Engineer</b> at
                <a href="https://www.appliedmaterials.com/us/en.html">Applied Materials</a> <a href="https://www.appliedmaterials.com/us/en/semiconductor/solutions-and-software/ai-x.html">AIx</a> since July 2024.
            </p>
        );
        const two = (
            <p>
                Outside of work you’ll probably find me rock climbing, playing video games, or obsessing over my latest hyperfixation.
            </p>
        );

        const tech_stack = [
            'Python',
            'Redis',
            'Clickhouse',
            'Docker',
            'React.js',
            'SQL',
            'REST API'
        ];

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
                                {tech_stack.map(function (tech_items, i) {
                                    return (
                                        <FadeInSection>
                                            <li>{tech_items}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                            {[two]}
                        </div>
                        <FadeInSection>
                            <div className="about-me-img">
                                <div className="slideshow">
                                    <div className="slide" onClick={this.handleImageClick}>
                                        <img className="slide_img" src={`${process.env.PUBLIC_URL}/assets/carosel_pictures/carosel${this.state.currentIndex + 1}.jpeg`} height={280} width={200} alt='profile pic' />
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </FadeInSection>
            </div>
        )
    }
}

export default About;
