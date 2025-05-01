import { Text, View } from "react-native-web";
import { Link } from "expo-router";

import PageTemplate from "../components/PageTemplate";

export default function BuildingAndConstructionPage() {
    const classes = [
        { id: 1, name: "Residential and Commercial Construction 1 (10,11,12) (1 year)", description: 1 },
        { id: 2, name: "Residential and Commercial Construction 2 (11,12) (1 year)", description: 3 },
        { id: 3, name: "Residential and Commercial Construction: Work Based Learning (12) (1 year)", description: 7 },
    ];

    const subClasses = [
        
    ];

    const finalClasses = [
        
    ];

    return (
        <>
            <PageTemplate
            class='Building & Construction'
            info='Foundations of Construction is an introductory course designed to inform students about careers in building and construction. This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study. Upon completion of this course, a proficient student will be able to describe various construction occupations and outline the steps necessary to advance in specific construction careers. Students will be able to employ tools safely, explain building systems and materials, and interpret basic construction drawings to complete projects, demonstrating proper measurement and application of mathematical concepts.'
            image={require('../assets/construction-image.jpg')}
            foundationClass='Foundations of Construction'
            foundationDescription="Foundations of Construction is an introductory course designed to inform students about careers in building and construction. This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study."
             classes={classes}
             subClasses={subClasses}
             finalClasses={finalClasses}
            club={'There is no active club for the Construction Pathway.'}
            clubDescription=""
            decaImage={require('../assets/favicon.png')}  
        />
        </>
    )
}