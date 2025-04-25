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
                info='Ms. Harada and other teachers teach this class and its about health. :)'
                image={require('../assets/healthBackground.jpg')}
            />
        </>
    )
}