// Represent a single recipe in a list

import { Pressable, Text, View } from "react-native";
import { Recipe } from "../gql/types";
import { styles } from "../../styles";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RecipeListItemProps = {
    recipe: Recipe;
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export const RecipeListItem = ({ recipe, navigation }: RecipeListItemProps) => {

    return (
        <Pressable onPress={() => navigation.navigate("ExploreRecipe", { recipe })}>
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
