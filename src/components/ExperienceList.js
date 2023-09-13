import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FadeInSection from "./FadeInSection";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from '@material-ui/core/Typography';
import { Box } from '@material-ui/core/Box';


const ExperienceList = () => {
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const experienceItems = {
        UCSB: {
            la : {
                jobTitle: "Undergraduate Learning Assistant @",
                duration: "08/23 - PRESENT",
                desc: [
                    "Facilitated a supportive learning environment for 75 students enrolled in Computer Science (CS9)",
                    "Leveraging strong communication and problem-solving skills to address inquiries, provide comprehensive assistance with homework, assignments, and effectively guide students towards achieving academic success."
                ]
            },
            ra : {
                jobTitle: "Undergraduate Research Assistant @",
                duration: "09/22 - 06/23",
                desc: [
                    "Supervised the official website for Bionic Vision labs with React, MongoDB, and Javascript.",
                    "Added 2 new pages displaying content and construct a Content Management System for convenient and effective editing."
                ]
            }
        },
        "YSTEM and Chess": {
            jr : {
                jobTitle: "Jr. Software Engineering Intern @",
                duration: "07/23 - PRESENT",
                desc: [
                    "Develop and enhance frontend features for a web application using Angular 9 (Typescript, HTML, CSS), while also contributing to backend functionalities using NodeJS Express and MongoDB.",
                    "Engage in collaborative teamwork with a team of 8 engineers at Y STEM and Chess nonprofit to develop and implement software solutions."
                ]
            }
        }
    }
}

export default ExperienceList