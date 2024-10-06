// User cookbook

import { Pressable, Text } from "react-native";
import { IngredientList } from "../components/IngredientList";
import { BaseScreen } from "./BaseScreen";
import { styles } from "../../styles";
import { CookBookScreenProps } from "../navigation/types";

export const CookbookScreen = ({ navigation }: CookBookScreenProps) => {
    return (
        <BaseScreen>
            <Pressable onPress={() => navigation.navigate("NewRecipeScreen")}>
                <Text style={styles.button}>Create New Recipe</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("NewIngredientScreen")}>
                <Text style={styles.button}>Create New Ingredient</Text>
            </Pressable>
        </BaseScreen>
    );
}
