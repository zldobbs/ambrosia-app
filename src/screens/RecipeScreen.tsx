// Display a selected recipe

import { View } from "react-native";
import { RecipeDetails } from "../components/RecipeDetails";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ExploreStackParamList } from "../../App"; // FIXME: Circular ref

// FIXME: Organize this better... Should it be getting exported?
export type RecipeScreenProps = NativeStackScreenProps<ExploreStackParamList, "ExploreRecipe">

export const RecipeScreen = ({ route, navigation }: RecipeScreenProps) => {
    const { recipe } = route.params;
    return (
        <View>
            <RecipeDetails recipe={recipe} />
        </View>
    );
}
