// Display a selected recipe

import { View } from "react-native";
import { RecipeDetails } from "../components/RecipeDetails";
import { RecipeScreenProps } from "../navigation/types";

export const RecipeScreen = ({ route, navigation }: RecipeScreenProps) => {
    const { recipe } = route.params;
    return (
        <View>
            <RecipeDetails recipe={recipe} />
        </View>
    );
}
