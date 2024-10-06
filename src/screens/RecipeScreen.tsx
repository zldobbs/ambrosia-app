// Display a selected recipe

import { View } from "react-native";
import { RecipeDetails } from "../components/RecipeDetails";
import { RecipeScreenProps } from "../navigation/types";
import { useQuery } from "@apollo/client";
import { ErrorResponse, RecipeByIdResponse } from "../gql/responses";
import { RECIPE_BY_ID } from "../gql/queries";
import { Loading } from "../components/Loading";
import { ErrorMessage } from "../components/ErrorMessage";

export const RecipeScreen = ({ route, navigation }: RecipeScreenProps) => {
    const { recipeId } = route.params;
    const { loading, error, data } = useQuery<RecipeByIdResponse>(RECIPE_BY_ID, { variables: { recipeId: recipeId } });

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />

    if (data) {
        return (
            <View>
                <RecipeDetails recipe={data.recipeById} />
            </View>
        );
    }

    return <Loading />;
}
