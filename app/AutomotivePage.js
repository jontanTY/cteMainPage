import { Text, View, ScrollView, StyleSheet, Image } from "react-native-web";
import { Link } from "expo-router";
import PageTemplate from "../components/PageTemplate";

export default function AutomotivePage() {
    const classes = [
        { id: 1, name: "Auto Maintenance and Light Repair 1 (10,11,12) (1 year)", description: 1 },
        { id: 2, name: "Auto Maintenance and Light Repair 2 (11,12) (1 year)", description: 3 },
        { id: 3, name: "Auto Maintenance and Light Repair 3 (12) (1 year)", description: 7 },
    ];

    const subClasses = [
        
    ];

    const finalClasses = [
        
    ];


    return (
        <>
            <PageTemplate
                class='Automotive'
                info='The Industrial Engineering Program at Moanalua High School is designed to prepare students to meet the challenge of changing processes in the technical areas of industry. The programs offered are designed to help the college bound student as well as the student who is technically-vocationally oriented. Courses will aid the student who decides to pursue careers in architectural or engineering areas, but it will also help the student who ventures into the automotive technology areas. Each program will provide the student with a basic background that will help should he or she decide to pursue a career in any technical area. All courses are open to girls and boys.'
                image={require('../assets/automotiveBackground.jpg')}
                foundationClass='Foundations of Auto Maintenance and Light Repair'
                classes={classes}
                subClasses={subClasses}
                finalClasses={finalClasses}
                clubDescription='There is no active club for the Automotive Pathway.'
            />
        </>
    )
}