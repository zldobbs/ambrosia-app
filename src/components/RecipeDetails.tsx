// Render a recipe

import { FlatList, Text, View } from "react-native";
import { Recipe } from "../gql/types"
import { styles } from "../../styles";
import { IngredientListItem } from "./IngredientListItem";

type RecipeProps = {
    recipe: Recipe;
}

export const RecipeDetails = ({ recipe }: RecipeProps) => {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.h1}>{recipe.name}</Text>
            <Text style={styles.italics}>by {recipe.user.name}</Text>
            <View style={{ margin: 10 }}>
                <Text>{recipe.description}</Text>
            </View>
            <View>
                <Text>Required Ingredients:</Text>
                <FlatList
                    data={recipe.ingredients}
                    keyExtractor={(item) => item.ingredientId.toString()}
                    renderItem={({ item }) => <IngredientListItem ingredient={item} />}
                />
            </View>
        </View>
    );
}
