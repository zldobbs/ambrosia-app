// Default home screen

import { Pressable, Text } from "react-native";
import { IngredientList } from "../components/IngredientList";
import { BaseScreen } from "./BaseScreen";
import { styles } from "../../styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

type CookBookScreenProps = {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

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
