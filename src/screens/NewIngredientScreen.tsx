// Default home screen

import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewIngredientForm } from "../components/NewIngredientForm";
import { BaseScreen } from "./BaseScreen";

type NewIngredientScreenProps = {
    navigation: NativeStackNavigationProp<ParamListBase>;
}

export const NewIngredientScreen = ({ navigation }: NewIngredientScreenProps) => {
    return (
        <BaseScreen>
            <NewIngredientForm />
        </BaseScreen>
    );
}
