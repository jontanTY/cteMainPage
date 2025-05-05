import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import { ScrollView } from 'react-native'
import PageTemplate from "../components/PageTemplate";
import PageHeader from "../components/PageHeader";

export default function HealthServicesPage() {
    const classes = [
        { id: 1, name: "Advanced Health Services", description: 1 },
        { id: 1, name: "Nursing Services 1", description: 1 },
        { id: 2, name: "Nursing Services 2", description: 1 },
    ];

    const subClasses = [
        
    ];

    const finalClasses = [
        
    ];

    return (
        <>
            <PageTemplate
                class='Health Services'
                info='Health Services is a field that focuses on the delivery of healthcare services, including prevention, diagnosis, treatment, and rehabilitation. It encompasses a wide range of careers, including nursing, medical assisting, pharmacy, and public health. Health services professionals work to improve the health and well-being of individuals and communities through direct patient care, education, and advocacy.'
                image={require('../assets/healthBackground.jpg')}
                foundationClass = 'Foundations of Health Services (1 and 2)'
                foundationDescription="Foundations of Health Services is an introductory course designed to inform students about careers in the Health Services field, as
                well as basic medical skills and terminology. This Level I course serves as the foundation course for the Public Health Services,
                Diagnostic Services, Emergency Medical Services, Human Performance Therapeutic Services, and Nursing Services programs of
                study. Upon completion of the course, a proficient student will have foundational knowledge of various medical careers, foundational
                healthcare skills, safety skills, traditional Hawaiian health care philosophies, and ethics. As part of a student’s program of study
                progression, the student will create a digital program of study portfolio, providing evidence of mastery of course standards and
                readiness to advance and complete the program of study. Recommended for students who seek a general background and overview
                of the healthcare profession."
                classes={classes}
                subClasses={subClasses}
                finalClasses={finalClasses}
                club={'HOSA (Health Occupations Students of America)'}
                clubDescription="HOSA s an international career and technical student organization focused on preparing students for careers in the healthcare industry. 
                It's a student-led organization that empowers future healthcare professionals through education, collaboration, and experience. HOSA provides leadership 
                development, motivation, and recognition for students enrolled in health science programs or interested in health professions."
                decaImage={require('../assets/fccla.jpg')}
            />
        </>
    )
}