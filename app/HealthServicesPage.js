import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import { ScrollView } from 'react-native'
import PageTemplate from "../components/PageTemplate";
import PageHeader from "../components/PageHeader";

export default function HealthServicesPage() {
    return (
        <>
            <PageTemplate
                class='Health Services'
                info='Foundations of Health Services is an introductory course designed to inform students about careers in the Health Services field, as well as basic medical skills and terminology. This Level I course serves as the foundation course for the Public Health Services, Diagnostic Services, Emergency Medical Services, Human Performance Therapeutic Services, and Nursing Services programs of study. Upon completion of the course, a proficient student will have foundational knowledge of various medical careers, foundational healthcare skills, safety skills, traditional Hawaiian health care philosophies, and ethics. As part of a student’s program of study progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and readiness to advance and complete the program of study. Recommended for students who seek a general background and overview of the healthcare profession.'
                image={require('../assets/healthBackground.jpg')}
            />
        </>
    )
}