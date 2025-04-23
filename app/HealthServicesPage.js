import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import { ScrollView } from 'react-native'
import PageTemplate from "../components/PageTemplate";

export default function HealthServicesPage() {
    return (
        <ScrollView>
            <PageTemplate
            class = 'Health Services'
            info = 'Health Services Text Here'            
            />
        </ScrollView>
    )
}