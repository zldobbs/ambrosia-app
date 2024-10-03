// Render a recipe

import { FlatList, ScrollView, Text, View } from "react-native";
import { Recipe } from "../gql/types"
import { styles } from "../../styles";
import { IngredientListItem } from "./IngredientListItem";

type RecipeProps = {
    recipe: Recipe;
}

export const RecipeDetails = ({ recipe }: RecipeProps) => {
    return (
        <ScrollView>
            <View style={styles.centerContainer}>
                <Text style={styles.h1}>{recipe.name}</Text>
                <Text style={styles.italics}>by {recipe.user.name}</Text>
                <View style={{ margin: 10 }}>
                    <Text>{recipe.description}</Text>
                </View>
                <View>
                    <Text>Required Ingredients:</Text>
                    {recipe.ingredients.map((ingredient) => (
                        <IngredientListItem key={ingredient.ingredientId} ingredient={ingredient} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
