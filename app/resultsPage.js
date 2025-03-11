import { FlatList, View, Text } from "react-native-web";
import { useEffect, useState } from "react";
import ResultObjectReturn from "../components/ResultObjectReturn";

export default function resultsPage(props) {
    const [list, setList] = useState([{title: 'result1', score: 5, description: 'awdawd', URL: "www.1"},
        {title: 'result2', score: 5, description: 'awdawd2', URL: "www.2"}]);

    let id = 0;

    // function addResult(enterText, enterSubtext) {
    //     //makes list equal to a newList that adds a new result that has these components (title, )
    //     setList((newlist) => [{ title: enterText, description: enterSubtext, key: id.toString()}, ...newlist]);
    //     id++;
    // }

    return (
        <View>
            <FlatList
                data={list}
                renderItem={(itemData) => {
                    return (
                        <ResultObjectReturn
                            description={itemData.item.description}
                            titleText={itemData.item.title}
                            keyNum={itemData.item.key}
                            query = {props.input}
                            URL = {itemData.item.URL}
                        />
                    );
                }}
            />
        </View>
    );
}