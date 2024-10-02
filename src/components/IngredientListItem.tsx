// Represent a single ingredient

import { Text, View } from "react-native";
import { Ingredient } from "../gql/types"
import { styles } from "../../styles";

type IngredientListItemProps = {
    ingredient: Ingredient;
}

export const IngredientListItem = ({ ingredient }: IngredientListItemProps) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.bold}>{ingredient.name}</Text>
            <Text>{ingredient.description}</Text>
            <Text style={styles.italics}>Created by: {ingredient.user.name}</Text>
        </View>
    );
}
