// Represent a single ingredient

import { Text } from "react-native";
import { Ingredient } from "../gql/types"

export const IngredientListItem = ({ ingredient }: { ingredient: Ingredient }) => {
    return (
        <Text>{ingredient.name}: {ingredient.description} (created by: {ingredient.user.name})</Text>
    );
}
