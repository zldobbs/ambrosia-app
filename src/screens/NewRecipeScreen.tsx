// Hold the form to create a new recipe

import { View } from "react-native";
import { NewRecipeForm } from "../components/NewRecipeForm";
import { NewRecipeScreenProps } from "../navigation/types";
import { BaseScreen } from "./BaseScreen";
import { styles } from "../../styles";

export const NewRecipeScreen = ({ navigation }: NewRecipeScreenProps) => {
    return (
        <BaseScreen>
            <View style={styles.container}>
                <NewRecipeForm />
            </View>
        </BaseScreen>
    );
}
