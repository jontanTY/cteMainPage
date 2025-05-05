import { Text, View } from "react-native-web";
import { Link } from "expo-router";

import PageTemplate from "../components/PageTemplate";

export default function BuildingAndConstructionPage() {
    return (
        <>
            <PageTemplate
                class='Building and Construction'
                info='Foundations of Construction is an introductory course designed to inform students about careers in building and construction.
This Level 1 course serves as the foundation course for the Residential & Commercial Construction program of study. Upon
completion of this course, a proficient student will be able to describe various construction occupations and outline the steps
necessary to advance in specific construction careers. Students will be able to employ tools safely, explain building systems and
materials, and interpret basic construction drawings to complete projects, demonstrating proper measurement and application of
mathematical concepts'
                image={require('../assets/automotiveBackground.jpg')}
            />
        </>
    )
}