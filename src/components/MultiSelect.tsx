// Support selecting multiple items from a given list

import { FlatList, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";

type MultiSelectProps = {
    items: any[];
    selectedItems: any[];
    keyExtractor: Function;
    labelExtractor: Function;
    onChange: Function;
}

export const MultiSelect = ({ items, selectedItems, keyExtractor, labelExtractor, onChange }: MultiSelectProps) => {
    const handleSelect = (item: any) => {
        const itemKey = keyExtractor(item);
        const newSelectedItems = selectedItems.includes(itemKey)
            ? selectedItems.filter(item => item !== itemKey)
            : [...selectedItems, itemKey];
        onChange(newSelectedItems);
    };

    return (
        <FlatList
            style={styles.list}
            data={items}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)}>
                    <Text style={[styles.listItem, { backgroundColor: selectedItems.includes(keyExtractor(item)) ? "#ddd" : "#fff" }]}>
                        {labelExtractor(item)}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
}
