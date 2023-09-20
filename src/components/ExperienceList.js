import React from 'react';
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import FadeInSection from './FadeInSection';

function TabPanel(props) {
    const {children, value, index, ...other}  = props;

    return (
        <div
        role = "tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}
/*
const useStyles = makeStyles(theme => ({

}))
*/
const ExperienceList = () => {
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const experienceItems = {
        "UCSB" : {
            "Undergraduate Learning Assistant @" : {
                duration: "08/23 - PRESENT",
                desc: [
                    "Facilitated a supportive learning environment for 75 students enrolled in Computer Science (CS9)",
                    "Leveraging strong communication and problem-solving skills to address inquiries, provide comprehensive assistance with homework, assignments, and effectively guide students towards achieving academic success."
                ]
            },
            "Undergraduate Research Assistant @" : {
                duration: "09/22 - 06/23",
                desc: [
                    "Supervised the official website for Bionic Vision labs with React, MongoDB, and Javascript.",
                    "Added 2 new pages displaying content and construct a Content Management System for convenient and effective editing."
                ]
            }
        },
        "YSTEM and Chess": {
            "Jr. Software Engineering Intern @" : {
                duration: "07/23 - PRESENT",
                desc: [
                    "Develop and enhance frontend features for a web application using Angular 9 (Typescript, HTML, CSS), while also contributing to backend functionalities using NodeJS Express and MongoDB.",
                    "Engage in collaborative teamwork with a team of 8 engineers at Y STEM and Chess nonprofit to develop and implement software solutions."
                ]
            }
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className="experience-tab">
            <Tabs
                value = {value}
                onChange={handleChange}
                variant={"standard"}
            >
                {Object.keys(experienceItems).map((key, i) => (
                    <Tab label={key} {...a11yProps(i)} />
                ))}
            </Tabs>
            {Object.keys(experienceItems).map((key, i) => (
                Object.keys(experienceItems[key]).map((role, j) => (
                    <FadeInSection>
                            <TabPanel value={value} index={i}>
                                <span className="joblist-job-title">
                                    {role + " "}
                                </span>
                                <span className="joblist-job-company">
                                    {key}
                                </span>
                                <div className="joblist-duration">
                                    {experienceItems[key][role]["duration"]}
                                </div>
                                <ul className="job-description">
                                    {experienceItems[key][role]["desc"].map(function (descItem, k) {
                                        return (
                                            <li key={k}>{descItem}</li>
                                        );
                                    })}
                                </ul>
                            </TabPanel>
                    </FadeInSection>
                ))
            ))}
        </div>
    );
}

export default ExperienceList