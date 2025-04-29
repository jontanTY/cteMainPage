import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import PageTemplate from "../components/PageTemplate";

export default function MediaPage() {
    return (
        <PageTemplate
            class='Media'
            info=''
            image={require('../assets/mediaBackground.jpg')}
        />
    )
}