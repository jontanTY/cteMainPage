import { Text, View } from "react-native-web";
import { Link } from "expo-router";
import PageTemplate from "../components/PageTemplate";

export default function GraphicsPage() {
    return (
        <View>
            <PageTemplate 
            class={'biddy'} 
            image={require('../assets/teacher-headshots/Nishimura-Photo.jpg')} 
            info={'Graphics is a class where you design stuff and stuff'}
            />
        </View>
    )
}