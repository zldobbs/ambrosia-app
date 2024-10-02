// Represent a list of recipes

import { useQuery } from "@apollo/client";
import { RECIPES } from "../gql/queries";
import { Recipe } from "../gql/types";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { FlatList, View } from "react-native";
import { RecipeListItem } from "./RecipeListItem";
import { styles } from "../../styles";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RecipeData = {
    recipes: Recipe[];
}

type RecipeListProps = {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export const RecipeList = ({ navigation }: RecipeListProps) => {
    const { loading, error, data } = useQuery<RecipeData>(RECIPES);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />
    if (data) {
        const { recipes } = data;

        return (
            <View style={styles.list}>
                <FlatList
                    data={recipes}
                    keyExtractor={(item) => item.recipeId.toString()}
                    renderItem={({ item }) => <RecipeListItem recipe={item} navigation={navigation} />}
                />
            </View>
        );
    }

    return <Loading />;
}
