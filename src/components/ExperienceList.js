import React from 'react';
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import FadeInSection from './FadeInSection';
import { CSSTransition } from 'react-transition-group';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
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

const ExperienceList = () => {
    const [value, setValue] = React.useState(0);


    const experienceItems = {
        "Applied Materials": {
            "Software Engineer 1 @": {
                duration: "07/24 - PRESENT",
                desc: [
                    "Optimized Clickhouse database performance using SQL and PyArrow, reducing query execution times by 98% through efficient data processing and indexing strategies.",
                    "Conducted performance testing on database query execution times, resulting in a 30% improvement in runtime transparency and identification of high-impact optimization opportunities.",
                    "Implemented and enhanced efficient REST APIs for UI needs, reducing page load times by 40% through streamlined endpoints.",
                    "Engineered comprehensive tests for APIs and data transformers, boosting test coverage from 60% to 85% and enhancing system reliability.",
                    "Spearheaded development of a dynamic data batch loader, reducing memory usage by 47% and increasing batch throughput from 10k to 25k records per second.",
                ]
            }
        },
        "Channel Islands National Marine Sanctuary": {
            "Web Development and Data Visualization Intern @": {
                duration: "10/23 - 05/24",
                desc: [
                    "Developed a customized WordPress as content management system using object orientated PHP.",
                    "Leveraged WordPress and custom JavaScript to build a data visualization platform for National Marine Sanctuaries, displaying vital data encompassing over 663,000 square miles of protected aquatic habitats."
                ]
            }
        },
        "Y STEM and Chess": {
            "Jr. Software Engineering Intern @": {
                duration: "07/23 - 10/23",
                desc: [
                    "Create new frontend features for a web application using Angular 9.",
                    "Contribute to the improvement of backend functionalities by implementing additional endpoints using NodeJS Express and MongoDB."
                ]
            }
        },
        "UCSB": {
            "Undergraduate Learning Assistant @": {
                duration: "08/23 - 12/23",
                desc: [
                    "Coordinated a supportive learning environment for 200+ students enrolled in Intermediate Python.",
                    "Leveraging strong communication and problem-solving skills to address inquiries, provide comprehensive assistance with homework, assignments, and effectively guide students towards achieving academic success."
                ]
            },
            "Undergraduate Research Assistant @": {
                duration: "09/22 - 06/23",
                desc: [
                    "Implemented a content management system with an authorization and verification system.",
                    "Incorporated a consistent design strategy to provide low-vision users with a more accessible website experience"
                ]
            }
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div id="experience-container">
            <Tabs
                value={value}
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
                        <CSSTransition
                            in={value === i}
                            timeout={300}
                            classNames="tab-content"
                            unmountOnExit
                        >
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
                        </CSSTransition>
                    </FadeInSection>
                ))
            ))}
        </div>
    );
}

export default ExperienceList