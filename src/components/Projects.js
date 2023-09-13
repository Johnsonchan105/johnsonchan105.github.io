import React from "react";
import '../styles/Project.css'
import FadeInSection from "./FadeInSection";

class Project extends React.Component {
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
}
export default Project;