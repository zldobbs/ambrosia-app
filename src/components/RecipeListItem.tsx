// Represent a single recipe in a list

import { Text, TouchableOpacity, View } from "react-native";
import { Recipe } from "../gql/types";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

type RecipeListItemProps = {
    recipe: Recipe;
}

export const RecipeListItem = ({ recipe }: RecipeListItemProps) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Explore", { screen: "RecipeScreen", params: { recipeId: recipe.recipeId.toString() } })}>
            <View style={styles.listItem}>
                <Text style={styles.h4}>{recipe.name}</Text>
                <Text>{recipe.description}</Text>
                <Text style={styles.italics}>created by: {recipe.user.name}</Text>
            </View>
        </TouchableOpacity >
    );
}
