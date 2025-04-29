import { Text, View } from "react-native-web";
import { Link } from "expo-router";

import PageTemplate from "../components/PageTemplate";

export default function BuildingAndConstructionPage() {
    const classes = [
        { id: 1, name: "Marketing", description: 1 },
        { id: 2, name: "Entrepreneurship", description: 3 },
        { id: 3, name: "Financial Management", description: 7 },
    ];

    const subClasses = [
        { id: 1, name: "Advertising & Public Relations", description: 1 },
        { id: 2, name: "Entrepreneurship 1", description: 3 },
        { id: 3, name: "Principles of Finance", description: 7 },
    ];

    const finalClasses = [
        { id: 1, name: "Digital Marketing & Analytics", description: 1 },
        { id: 2, name: "Entrepreneurship 2", description: 3 },
        { id: 3, name: "Accounting", description: 7 },
    ];

    return (
        <>
            <PageTemplate
            class='Building & Construction'
            info='This pathway is about Building & Construction'
            image={require('../assets/collage-5.png')}
            foundationClass='Foundations of Construction'
            foundationDescription="Foundations of Construction is an introductory course designed to inform students about careers in building and construction. This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study."
             classes={classes}
             subClasses={subClasses}
             finalClasses={finalClasses}
            club={''}
            clubDescription=""
            decaImage={require('../assets/favicon.png')}  
        />
        </>
    )
}