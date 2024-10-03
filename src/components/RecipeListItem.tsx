// Represent a single recipe in a list

import { Pressable, Text, View } from "react-native";
import { Recipe } from "../gql/types";
import { styles } from "../../styles";
import { useNavigation } from "@react-navigation/native";

type RecipeListItemProps = {
    recipe: Recipe;
}

export const RecipeListItem = ({ recipe }: RecipeListItemProps) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate("Explore", { screen: "RecipeDetails", params: { recipe } })}>
            <View style={styles.listItem}>
                <Text style={styles.h4}>{recipe.name}</Text>
                <Text>{recipe.description}</Text>
                <Text style={styles.italics}>created by: {recipe.user.name}</Text>
                {/*
                TODO: IngredientList should take props, what ingredients should be rendered?
                <IngredientList></IngredientList>
                */}
            </View>
        </Pressable>
    );
}
