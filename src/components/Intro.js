import React from "react";

import '../styles/Intro.css';
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
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

    render() {
        return (
            <div id = 'intro'>
                <span className="intro-title">
                    {"Hi! I'm Johnson!"}
                </span>
                <FadeInSection>
                    <div className="intro-desc">
                    I'm a software engineer based in Campbell, CA, 
                    who loves crafting frontends, exploring machine learning, 
                    enhancing the way people interact with technology, 
                    and everything in between.
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;

