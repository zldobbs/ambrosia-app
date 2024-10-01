// Default home screen

import { Pressable, Text } from "react-native";
import { IngredientList } from "../components/IngredientList";
import { BaseScreen } from "./BaseScreen";
import { styles } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const CookbookScreen = ({ navigation }: { navigation: NativeStackNavigationProp<any> }) => {
    return (
        <BaseScreen>
            <IngredientList />
            <Pressable onPress={() => navigation.navigate("NewIngredient")}>
                <Text style={styles.button}>Create New Ingredient</Text>
            </Pressable>
        </BaseScreen>
    );
}
