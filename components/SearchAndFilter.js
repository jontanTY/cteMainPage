import { StyleSheet, Text, View, TextInput, Image } from "react-native-web";
import { MultiSelect } from 'react-native-element-dropdown';
import { useState } from "react";

export default function SearchAndFilters(props) {
    const [selected, setSelected] = useState([]);
    
    const data = [
        { label: 'Automotive', value: '1' },
        { label: 'Business', value: '2' },
        { label: 'Computer Science', value: '3' },
        { label: 'Construction', value: '4' },
        { label: 'Culinary', value: '5' },
        { label: 'Engineering', value: '6' },
        { label: 'Fashion', value: '7' },
        { label: 'Graphics', value: '8' },
        { label: 'Health Services', value: '9' },
        { label: 'Media (MeneMac)', value: '10' },
        { label: 'People', value: '11' },
        { label: 'Events', value: '12' },
        { label: 'Dev Team', value: '13' },
        { label: 'HOSA', value: '14' },
        { label: 'DECA', value: '15' },
        { label: 'Robotics', value: '16' },
        { label: 'FCCLA', value: '17' },
    ];

    return (
        <View style={{ marginRight: 40, borderWidth: 0, borderColor: 'grey' }}>
            <MultiSelect
                style={{ width: 130, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                placeholderStyle={{ color: 'grey' }}
                // iconStyle={styles.iconStyle}
                activeColor="lightgrey"
                itemTextStyle={{ color: 'grey' }}
                selectedTextStyle={{ color: 'grey', fontSize: 15 }}
                inputSearchStyle={{ width: 90 }}
                showsVerticalScrollIndicator={false}
                dropdownPosition="down"
                maxSelect={2}
                //search
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Filter"
                searchPlaceholder="Search..."
                value={selected}
                onChange={item => {
                    setSelected(item);
                }}
                renderLeftIcon={() => (
                    <Image
                        style={[{ height: 5, width: 5, opacity: 0 }]}
                        source={require('../assets/icon.png')}
                    />
                )}
            //selectedStyle={styles.selectedStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});