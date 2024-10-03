// User cookbook

import { Pressable, Text } from "react-native";
import { IngredientList } from "../components/IngredientList";
import { BaseScreen } from "./BaseScreen";
import { styles } from "../../styles";
import { CookBookScreenProps } from "../navigation/types";

export const CookbookScreen = ({ navigation }: CookBookScreenProps) => {
    return (
        <BaseScreen>
            <IngredientList />
            <Pressable onPress={() => navigation.navigate("NewIngredient")}>
                <Text style={styles.button}>Create New Ingredient</Text>
            </Pressable>
        </BaseScreen>
    );
}
