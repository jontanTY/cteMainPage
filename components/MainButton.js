import { Pressable, Text, StyleSheet, View } from "react-native";

export default function MainButton(props) {
    return (
      <Pressable onPress = {props.onPress} style={styles.container}>
        <Text>{props.children}</Text>
      </Pressable>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        
    }
  })