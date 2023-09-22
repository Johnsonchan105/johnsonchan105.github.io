import React from "react";
import { Sidenav } from "rsuite";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import "../styles/SideBarNav.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

class SideBarNav extends React.Component {
    constructor() {
        super();
        this.state = {
          expanded: true,
          activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
      }
      handleSelect(eventKey) {
        this.setState({
          activeKey: eventKey
        });
      }
      render () {
        const { expanded } = this.state;

        const links = [
            <a href="#intro">home</a>,
            <a href="#about">about</a>,
            <a href="#experience">experience</a>,
            //<a href="#projects">projects</a>
        ];

        return (
            <div className="sidebar-nav">
                {!isMobile && (
                    <Sidenav
                        expanded = {expanded}
                        defaultOpenKeys={["3", "4"]}
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}
                        appearance={"subtle"}
                    >
                        <Sidenav.Body>
                            <div className="sidebar-links">
                                {links.map((link, i) => (
                                    <FadeInSection>
                                        <div>{link}</div>
                                    </FadeInSection>
                                ))}
                            </div>
                        </Sidenav.Body>
                    </Sidenav>
                )}
                <div className="sidebar-logos" href="/">
                    <a href="https://www.linkedin.com/in/chenghanchan/">
                        <LinkedInIcon style={{ fontSize: 22.5 }}></LinkedInIcon>
                    </a>
                    <a href="https://github.com/Johnsonchan105">
                        <GithubIcon style={{ fontSize: 20 }}></GithubIcon>
                    </a>
                    <a href="https://www.instagram.com/johnsonchan105/">
                        <InstagramIcon style={{ fontSize: 22.5 }}></InstagramIcon>
                    </a>
                    <a href="https://www.facebook.com/johnsonchan105/">
                        <FacebookIcon style={{ fontSize: 20 }}></FacebookIcon>
                    </a>
                </div>
            </div>
        );
      }
}

export default SideBarNav;